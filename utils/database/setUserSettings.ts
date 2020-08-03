import { query as q } from 'faunadb'
import getDatabaseClient from './utils/getDatabaseClient'
import { UserSettings } from './getUserSettings'

const setUserSettings = async (userId: number, newSettings: Partial<UserSettings>) => {
  const client = getDatabaseClient()

  await client.query(
    q.Update(
      q.Ref(
        q.Collection('users-settings'),
        userId
      ),
      {
        data: newSettings
      },
    )
  )
}

export default setUserSettings
