/**
 * Validates a Belarusian phone number.
 * Accepts: +375XXXXXXXXX, 375XXXXXXXXX, or XXXXXXXXX (9 digits)
 * Valid operator codes: 17 (city), 25, 29 (Life:)), 33 (МТС), 44 (A1)
 */
export function validateBelarusPhone(phone: string): boolean {
    const stripped = phone.replace(/[\s\-\(\)]/g, '')
    return /^(\+375|375)?(17|25|29|33|44)\d{7}$/.test(stripped)
}
