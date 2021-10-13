function fact(n: number): number {
    if(n == 1 || n == 2) return 1;

    return fact(n-1) + fact(n-2);
}

export default {
    fact
}