import { BoostType, Clan, Lottery, Player, QueuedAction, RaffleEntry, UserItemNFT } from "@paintswap/estfor-definitions/types"

const baseUrl = 'https://api.estfor.com'

export interface ClanMember {
    player: Player
    clan: Clan | null
}

export interface ClanMemberResult {
    clanMember: ClanMember
}

export interface ClanMembersResult {
    clanMembers: ClanMember[]
}

export interface ClansResult {
    clans: Clan[]
}

export interface PlayerResult {
    player: Player
}

export interface CoreData {
    gamePaused: boolean
    globalBoostStartTime: string
    globalBoostDuration: number
    globalBoostVal: number
    globalBoostType: BoostType
    globalBoostItemTokenId: number
}

export interface CoreDataResult {
    coreData: CoreData
}

export interface UserItemNFTResult {
    userItemNFTs: UserItemNFT[]
}

export interface PlayerSearchResult {
    players: Player[]
}

export interface LotteriesResult {
    lotteries: Lottery[]
}

export interface RaffleEntryResult {
    raffleEntries: RaffleEntry[]
}

export interface SearchQueuedActionsResult {
    queuedActions: QueuedAction[]
}

export const getPlayerState = async (
    playerId: string
): Promise<ClanMemberResult> => {
    const response = await fetch(
        `${baseUrl}/clan-members/${playerId}`
    )
    return response.json()
}

export const getGlobalData = async (): Promise<CoreDataResult> => {
    const response = await fetch(
        `${baseUrl}/core-data`
    )
    return response.json()
}

export const getUserItemNFTs = async (user: string, tokenIds: number[]): Promise<UserItemNFTResult> => {
    const response = await fetch(
        `${baseUrl}/user-item-nfts/${user}?${tokenIds.map(x => `tokenIds[]=${x}`).join('&')}`
    )
    return response.json()
}

export const getPlayers = async (searchTerm: string): Promise<PlayerSearchResult> => {
    const response = await fetch(
        `${baseUrl}/players?name=${searchTerm}`
    )
    return response.json()
}

export const getPlayersByIds = async (ids: string[]): Promise<PlayerSearchResult> => {
    const response = await fetch(
        `${baseUrl}/players?${ids.map(x => `tokenIds[]=${x}`).join('&')}`
    )
    return response.json()
}

export const getSoloPlayerState =async (playerId: string): Promise<PlayerResult> => {
    const response = await fetch(
        `${baseUrl}/players/${playerId}`
    )
    return response.json()
}

export const getLotteries = async (numToSkip: number): Promise<LotteriesResult> => {
    const response = await fetch(
        `${baseUrl}/lotteries?numToSkip=${numToSkip}`
    )
    return response.json()
}

export const getRaffleEntries = async (numToSkip: number): Promise<RaffleEntryResult> => {
    const response = await fetch(
        `${baseUrl}/raffle-entries?numToSkip=${numToSkip}`
    )
    return response.json()
}

export const getClanMembers = async (clanId: string): Promise<ClanMembersResult> => {
    const response = await fetch(
        `${baseUrl}/clan-members?clanId=${clanId}`
    )
    return response.json()
}

export const getClans = async (numToSkip: number): Promise<ClansResult> => {
    const response = await fetch(
        `${baseUrl}/clans?numToSkip=${numToSkip}`
    )
    return response.json()
}

export const searchQueuedActions = async (playerId: string): Promise<SearchQueuedActionsResult> => {
    const response = await fetch(
        `${baseUrl}/queued-actions?playerId=${playerId}&isActive=true`
    )
    return response.json()
}