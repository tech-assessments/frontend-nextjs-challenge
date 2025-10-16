export default function UserDetaileCard({ user }) {
  if (!user) return null;

  return (
    <div className="p-4 max-w-2xl mx-auto mt-10 bg-[#4a55a2] shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
      <div className="space-y-2 text-white">
        <p>
          <strong>Username:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
          <p>
            <strong>City:</strong> {user.address.city}
          </p>
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
      </div>
    </div>
  );
}
