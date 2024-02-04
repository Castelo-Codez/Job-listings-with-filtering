export function $addFilter($array = []) {
    return Array.from(new Set([...$array]));
}
