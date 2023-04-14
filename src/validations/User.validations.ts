// Single Responsibility Principle
export default class UserValidation {
  public static validateEmail(email: string): boolean {
    const emailRegex = /\S+@\S+\.\S/;
    return emailRegex.test(email);
  }

  public static validatePasswordHasFiveDigits(password: string): boolean {
    return password.length >= 5;
  }

  public static validatePassword(password: string): boolean {
    const passwordRegex = /^\d+$/; /* Senha pode ter apenas números */
    return passwordRegex.test(password);
  }

  public static validateRole(role: string): boolean {
    return role === 'admin' || role === 'employer';
  }

  public static validateUser(
    email: string,
    password: string,
    role: string,
  ): boolean {
    return (
      this.validateEmail(email)
      && this.validatePassword(password)
      && this.validateRole(role)
      && this.validatePasswordHasFiveDigits(password)
    );
  }
}