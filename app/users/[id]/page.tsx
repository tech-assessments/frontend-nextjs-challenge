import Link from 'next/link'
import { notFound } from 'next/navigation'

interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  address: {
    city: string
    street: string
    suite: string
    zipcode: string
  }
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
  website: string
}

async function getUser(id: string): Promise<User | null> {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      cache: 'no-store'
    })
    
    if (!res.ok) {
      return null
    }
    
    return res.json()
  } catch {
    return null
  }
}

export default async function UserDetailsPage({ params }: { params: { id: string } }) {
  const user = await getUser(params.id)

  if (!user) {
    notFound()
  }

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-6">
        <Link
          href="/users"
          className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500"
        >
          <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          بازگشت به لیست کاربران
        </Link>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            جزئیات کاربر
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            اطلاعات کامل کاربر {user.name}
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">نام کامل</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.name}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">نام کاربری</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.username}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">ایمیل</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.email}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">تلفن</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.phone}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">وب‌سایت</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-500">
                  {user.website}
                </a>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">آدرس</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.address.street}, {user.address.suite}<br />
                {user.address.city}, {user.address.zipcode}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">شرکت</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <div className="font-medium">{user.company.name}</div>
                <div className="text-gray-500">{user.company.catchPhrase}</div>
                <div className="text-gray-400 text-xs">{user.company.bs}</div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
