class IsValid {
    static object(obj) {
        if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
            return false;
        }
        return true;
    }

    static nonEmtyArray(arr) {
        return Array.isArray(arr) && arr.length > 0;
    }

    static positiveInteger(num) {
        if (!Number.isInteger(num) || num < 0) {
            return false;
        }

        return true;
    }

    static stringSizeInRange(str, max = 20, min = 1) {
        if (!IsValid.positiveInteger(max)) {
            max = 20;
        }
        if (!IsValid.positiveInteger(min)) {
            max = 1;
        }
        if (typeof str !== 'string' || str.length < min || str.length > max) {
            return false;
        }
        return true;
    }

    static icon(str) {
        const maxLength = 12;

        if (!IsValid.stringSizeInRange(str, maxLength)) {
            return false;
        }
        return true;
    }

    static text(str) {
        const maxLength = 15;
        if (!IsValid.stringSizeInRange(str, maxLength)) {
            return false;
        }
        return true;
    }
}

export { IsValid };
