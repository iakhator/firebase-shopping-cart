import requireAdmin from './_requireAdmin'
import { faker } from '@faker-js/faker'

export default defineEventHandler(
  requireAdmin(async (event) => {
    // Get pagination params
    const query = getQuery(event)
    const page = parseInt(query.page || '1', 10)
    const pageSize = parseInt(query.pageSize || '20', 10)
    const start = (page - 1) * pageSize

    // Generate fake users
    const users = Array.from({ length: pageSize }, (_, i) => ({
      id: faker.string.uuid(),
      displayName: faker.person.fullName(),
      email: faker.internet.email(),
      role: faker.helpers.arrayElement(['admin', 'user']),
      status: faker.helpers.arrayElement(['active', 'inactive']),
    }))

    return {
      data: users,
      page,
      pageSize,
      message: 'Success',
    }
  }),
)
