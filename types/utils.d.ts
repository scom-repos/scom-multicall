export interface IMulticallInfo {
    chainId: number;
    contractAddress: string;
    gasBuffer: string;
}
export declare function getMulticallInfoList(): {
    chainId: number;
    contractAddress: string;
    gasBuffer: string;
}[];
export declare function getMulticallInfo(chainId: number): {
    chainId: number;
    contractAddress: string;
    gasBuffer: string;
};
