import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
          <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">کاربر یافت نشد</h1>
        <p className="mt-2 text-gray-600">
          متأسفانه کاربر مورد نظر شما یافت نشد.
        </p>
        <div className="mt-6">
          <Link
            href="/users"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            بازگشت به لیست کاربران
          </Link>
        </div>
      </div>
    </div>
  )
}
