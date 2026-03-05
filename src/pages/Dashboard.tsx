import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Mail, Calendar, Activity } from 'lucide-react';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-2xl font-bold text-primary-600">BrandName</span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-gray-400">Here's what's happening with your account today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
                <Activity className="text-primary-400" size={24} />
              </div>
              <span className="text-green-400 text-sm font-semibold">+12%</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Total Projects</h3>
            <p className="text-3xl font-bold text-white">24</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <User className="text-blue-400" size={24} />
              </div>
              <span className="text-green-400 text-sm font-semibold">+8%</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Team Members</h3>
            <p className="text-3xl font-bold text-white">12</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                <Calendar className="text-purple-400" size={24} />
              </div>
              <span className="text-green-400 text-sm font-semibold">+5%</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Tasks Completed</h3>
            <p className="text-3xl font-bold text-white">156</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center">
                <Mail className="text-orange-400" size={24} />
              </div>
              <span className="text-red-400 text-sm font-semibold">-3%</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Messages</h3>
            <p className="text-3xl font-bold text-white">48</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { action: 'Created new project', time: '2 hours ago', color: 'bg-green-500' },
                { action: 'Updated team settings', time: '5 hours ago', color: 'bg-blue-500' },
                { action: 'Completed 3 tasks', time: '1 day ago', color: 'bg-purple-500' },
                { action: 'Added new team member', time: '2 days ago', color: 'bg-orange-500' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg">
                  <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{item.action}</p>
                    <p className="text-gray-400 text-sm">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Profile</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {user?.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-white font-semibold">{user?.name}</p>
                  <p className="text-gray-400 text-sm">{user?.email}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-700 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Member since</span>
                  <span className="text-white">Jan 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Account type</span>
                  <span className="text-white">Premium</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status</span>
                  <span className="text-green-400">Active</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-700 transition">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
