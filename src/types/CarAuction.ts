export type AuctionStatus = 'open' | 'endingSoon' | 'closed'

export interface CarAuction {
  id: number
  title: string
  make: string
  model: string
  year: number
  mileageKm: number
  currentBid: number
  buyNowPrice?: number
  timeLeftMinutes: number
  status: AuctionStatus
  fuelType: string
  transmission: string
  location: string
}
