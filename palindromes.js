const prepareStr = (str) => str.toLowerCase().replace(/[^a-z]/g, '');

const isPalindrome = (str) => {
    if (str.length == 1) {
        return true;
    }
    let lastIndex = str.length - 1;
    let firstIndex = 0;
    while (firstIndex >= lastIndex && str[firstIndex] == str[lastIndex]) {
        if (lastIndex - 1 == firstIndex || lastIndex == firstIndex) {
            return true;
        }
        lastIndex--;
        firstIndex++;
    }

    return false;
};

const stringStartPalindrome = (str) => {
    const firstLetter = str[0];
    let lastIndexOfFirstLetter = str.lastIndexOf(firstLetter);
    while (lastIndexOfFirstLetter >= 2) {
        const candidate = str.substring(0, lastIndexOfFirstLetter + 1);
        if (isPalindrome(candidate)) {
            return candidate;
        }
        lastIndexOfFirstLetter = str.lastIndexOf(
            firstLetter,
            lastIndexOfFirstLetter - 1
        );
    }

    return null;
};

const checkAllPalindrome = (str) => {
    const match = [];
    if (str.length == 0) {
        return [];
    }
    let startIndex = 0;
    while (startIndex < str.length) {
        const palindrome = stringStartPalindrome(str.substring(startIndex));
        if (palindrome) {
            match.push(palindrome);
            startIndex += palindrome.length;
        } else {
            startIndex++;
        }
    }

    return match;
};

// Attach helpers to the exported function for testing
checkAllPalindrome.prepareStr = prepareStr;
checkAllPalindrome.isPalindrome = isPalindrome;
checkAllPalindrome.stringStartPalindrome = stringStartPalindrome;

module.exports = checkAllPalindrome;
