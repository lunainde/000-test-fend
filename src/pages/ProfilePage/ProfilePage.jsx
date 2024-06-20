//client/src/pages/ProfilePage
import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import UserCard from '../../components/Cards/UserCard';
import "./ProfilePage.css";
function ProfilePage() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Profile page</h1>
      <UserCard user={user} />
    </div>
  );
}
export default ProfilePage;