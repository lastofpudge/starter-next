import { IRoot } from '@/services/IHomepage'

export const HomeService = {
  async getMeta(): Promise<IRoot> {
    return fetch(`${process.env.API_URL}/metadata`).then((res) =>
      res.json()
    )
  }
}