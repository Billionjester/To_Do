import i18n, { __ } from 'i18n';
import { UserModel, UserDocument } from '../models';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/jwtUtils';
import { UserInput } from '../types/context';
import { isValidEmail, isValidPassword } from '../utils/common';
import { GraphQLError } from 'graphql';

// async (req: Request, res: Response, next: NextFunction) =>
const resolvers = {
    Query: {
        users: async () => {
            try {
                const users: UserDocument[] = await UserModel.find();
                return users;
            } catch (error) {
                throw new GraphQLError('Failed to fetch users');
            }
        },
        user: async (_: any, id: number) => {
            try {
                const user: UserDocument | null = await UserModel.findById(id);
                return user;
            } catch (error) {
                throw new GraphQLError('Failed to fetch user');
            }
        },
        login: async (_: any, input: UserInput) => {
            try {
                const { email, password } = input;

                const user: UserDocument | null = await UserModel.findOne({ email });

                if (!user || !bcrypt.compareSync(password, user.password)) {
                    throw new GraphQLError('Invalid email or password');
                }

                // Generate a JWT token using the utility function
                const jwtToken = generateToken(user._id);
                // Update and save the token in the user's document
                user.jwtToken = jwtToken;
                await user.save();

                return { id: user._id, jwtToken, tokenExpiration: 1, name: user.name };
            } catch (error) {
                throw new GraphQLError('Login failed');
            }
        },
    },
    Mutation: {
        createUser: async (_: any, input: UserInput) => {
            try {
                const { name, email, password, role, language = '' } = input;

                // change the language
                language.trim() !== '' && i18n.setLocale(language);

                // Validate email format
                if (!isValidEmail(email)) throw new GraphQLError(__('invalidEmail'), {
                    extensions: {
                        code: 'BAD_USER_INPUT',
                        http: {
                            status: 404,
                            headers: new Map([
                                ['some-header', 'it was bad'],
                                ['another-header', 'seriously'],
                            ]),
                        },
                    }
                });

                // Validate password
                if (!isValidPassword(password)) throw new GraphQLError(__('invalidPassword'));

                // Check if user with the same email already exists
                const existingUser = await UserModel.findOne({ email });
                if (existingUser) {
                    throw new GraphQLError('User with this email already exists');
                }

                // Hash the password using bcrypt
                const hashedPassword = await bcrypt.hash(password, 10);

                const newUser: UserDocument = new UserModel({
                    name,
                    email,
                    password: hashedPassword,
                    role,
                    language,
                });

                await newUser.save();
                return newUser;
            } catch (error: any) {
                throw new GraphQLError(`Failed to create a new user: ${error.message}`);
            }
        },
        updateUser: async (_: any, input: UserInput) => {
            try {
                const { id, name, email } = input;

                const updatedUser: UserDocument | null = await UserModel.findByIdAndUpdate(
                    id,
                    { name, email },
                    { new: true }
                );
                return updatedUser;
            } catch (error) {
                throw new GraphQLError('Failed to update the user');
            }
        },
        deleteUser: async (_: any, id: number) => {
            try {
                const deletedUser: UserDocument | null = await UserModel.findByIdAndRemove(id);
                return deletedUser;
            } catch (error) {
                throw new GraphQLError('Failed to delete the user');
            }
        },
        updateLanguage: async (_: any, input: UserInput) => {
            try {
                const { id, language } = input;

                if (!id) {
                    throw new GraphQLError('User not authenticated');
                }

                const user = await UserModel.findByIdAndUpdate(id, { language }, { new: true });
                if (user) {
                    i18n.setLocale(language); // Update the locale for the current request
                    return 'Language updated successfully';
                } else {
                    throw new GraphQLError('User not found');
                }
            } catch (error) {
                throw new GraphQLError('Failed to update language');
            }

        },
    },
};

export default resolvers;
