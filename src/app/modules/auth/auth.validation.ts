import { z } from 'zod'

const registerValidationSchema = z.object({
  name: z.string({ required_error: 'Name is required.' }),
  email: z.string({ required_error: 'Email is required.' }).email(),
  password: z.string({ required_error: 'Password is required' }),
  imageUrl: z.string({ required_error: 'Image URL is required' }),
})

const loginValidationSchema = z.object({
  email: z.string({ required_error: 'Email is required.' }).email(),
  password: z.string({ required_error: 'Password is required' }),
})

const changePasswordValidationSchema = z.object({
  oldPassword: z.string({
    required_error: 'Old password is required',
  }),
  newPassword: z.string({ required_error: 'Password is required' }),
})

const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh token is required!',
    }),
  }),
})

const forgetPasswordValidationSchema = z.object({
  email: z
    .string({
      required_error: 'User email is required!',
    })
    .email(),
})

const resetPasswordValidationSchema = z.object({
  email: z
    .string({
      required_error: 'User email is required!',
    })
    .email(),
  newPassword: z.string({
    required_error: 'User password is required!',
  }),
})

export const AuthValidation = {
  registerValidationSchema,
  loginValidationSchema,
  changePasswordValidationSchema,
  refreshTokenValidationSchema,
  forgetPasswordValidationSchema,
  resetPasswordValidationSchema,
}
