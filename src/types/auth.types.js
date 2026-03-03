/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} fullName
 * @property {string} email
 * @property {'SUPERADMIN'|'SCHOOLADMIN'|'ACCOUNTANT'|'HR'} role
 * @property {string} schoolId
 * @property {string|null} branchId
 * @property {boolean} isActive
 */

/**
 * @typedef {Object} LoginResponse
 * @property {string} accessToken
 * @property {string} refreshToken
 * @property {User} user
 */

/**
 * @typedef {Object} ForgotPasswordResponse
 * @property {string} message
 * @property {string} debugOtp
 * @property {string} otpExpiresAt
 */

/**
 * @typedef {Object} VerifyOTPResponse
 * @property {string} resetToken
 * @property {string} expiresIn
 */

/**
 * @typedef {Object} ResetPasswordResponse
 * @property {string} message
 */