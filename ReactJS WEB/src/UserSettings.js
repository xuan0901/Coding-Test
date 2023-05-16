import React, { useState } from "react";

const UserSettings = () => {
  const [password, setPassword] = useState("");

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    // 在这里执行更新密码的逻辑
    setPassword("");
  };

  return (
    <div>
      <h1>User Settings</h1>
      <form onSubmit={handleUpdatePassword}>
        <div>
          <label>
            New Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Update Password</button>
        </div>
      </form>
    </div>
  );
};

export default UserSettings;
