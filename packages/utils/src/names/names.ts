// eslint-disable-next-line import/prefer-default-export
export function getInitialsFromFullName(fullName: string): string {
    const fullNameParts = fullName.split(' ').map((part) => part.substring(0, 1).toUpperCase());

    return fullNameParts
        .filter((_, index) => index === 0 || index === fullNameParts.length - 1)
        .join('');
}
