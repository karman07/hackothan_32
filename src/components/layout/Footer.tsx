import { Shield } from 'lucide-react'

export default function Footer() {
  return (
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">EduVerify</span>
                  <div className="text-sm text-gray-400">Government of Jharkhand Initiative</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Securing academic integrity through advanced AI-powered certificate verification technology. 
                A trusted platform for educational institutions and employers across Jharkhand.
              </p>
              <div className="text-sm text-gray-500">
                © 2024 EduVerify - Government of Jharkhand. All rights reserved.
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6">Platform</h3>
              <div className="space-y-3">
                <div className="text-gray-400 hover:text-white cursor-pointer transition-colors">Document Verification</div>
                <div className="text-gray-400 hover:text-white cursor-pointer transition-colors">Institutional Dashboard</div>
                <div className="text-gray-400 hover:text-white cursor-pointer transition-colors">API Integration</div>
                <div className="text-gray-400 hover:text-white cursor-pointer transition-colors">Bulk Verification</div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6">Support</h3>
              <div className="space-y-3">
                <div className="text-gray-400 hover:text-white cursor-pointer transition-colors">Help Center</div>
                <div className="text-gray-400 hover:text-white cursor-pointer transition-colors">Documentation</div>
                <div className="text-gray-400 hover:text-white cursor-pointer transition-colors">Contact Support</div>
                <div className="text-gray-400 hover:text-white cursor-pointer transition-colors">System Status</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              Developed in partnership with leading educational institutions
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
  )
}
