import { useState } from 'react';
import { AlertCircle, Search, Award, Shield, Zap, Heart, Info, CheckCircle, Trophy } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from "react-helmet-async";

interface CheckResults {
  totalChecked: number;
  matches: number;
  winningNumbers: string[];
}

const PrizeBondChecker = () => {
  const [activeTab, setActiveTab] = useState('checker');
  const [bondNumbers, setBondNumbers] = useState('');
  const [drawNumbers, setDrawNumbers] = useState('');
  const [results, setResults] = useState<CheckResults | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const checkWinner = () => {
    const bonds = bondNumbers.split(',').map(num => num.trim()).filter(num => num !== '');
    const draws = drawNumbers.split(',').map(num => num.trim()).filter(num => num !== '');

    if (bonds.length === 0 || draws.length === 0) {
      setToastMessage('Please enter both bond and draw numbers.');
      setShowToast(true);
      return;
    }

    const matches = bonds.filter(num => draws.includes(num));
    setResults({
      totalChecked: bonds.length,
      matches: matches.length,
      winningNumbers: matches
    });

    setToastMessage(matches.length > 0 
      ? `Congratulations! You have ${matches.length} winning number(s)!`
      : 'No matching numbers found.');
    setShowToast(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50"
    >
      <Helmet>
        <meta name="description" content="prize bond check online" />
        <meta name="keywords" content="prize bond, prize bond check online, prize bond draw 114, 113th prize bond draw, 110th prize bond draw, 109th prize bond draw, bangladesh bank prize bond, 108th prize bond draw, 112th prize bond draw, prize bond draw, prize bond draw 2024, premium prize bond checker, prize checker premium bond, prize bond news, prize bond list 750 online check, prize bond 1500, prize bond list 2024 online check, prize bond 1500 list 2024 pdf download"/>
      </Helmet>
 
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-600 p-2 rounded-lg shadow-md mr-3"
            >
              <Award className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </motion.div>
            <span className="text-xl md:text-2xl font-bold text-white">Prize Bond Pro</span>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-8 md:py-16">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="container mx-auto px-4 text-center text-white"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Prize Bond Checker Pro</h1>
          <p className="text-lg md:text-xl mb-8">Instantly verify your winning numbers with our professional checking tool</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 flex-wrap">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 px-4 py-2 rounded-full flex items-center justify-center"
            >
              <CheckCircle className="h-5 w-5 mr-2" />
              Instant Results
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 px-4 py-2 rounded-full flex items-center justify-center"
            >
              <Shield className="h-5 w-5 mr-2" />
              Secure Checking
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 px-4 py-2 rounded-full flex items-center justify-center"
            >
              <Zap className="h-5 w-5 mr-2" />
              Fast & Reliable
            </motion.span>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex space-x-4 border-b border-gray-200 mb-6 overflow-x-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('checker')}
            className={`px-3 md:px-4 py-2 font-medium whitespace-nowrap ${
              activeTab === 'checker'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500'
            }`}
          >
            <div className="flex items-center">
              <Search className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Bond Checker
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('instructions')}
            className={`px-3 md:px-4 py-2 font-medium whitespace-nowrap ${
              activeTab === 'instructions'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500'
            }`}
          >
            <div className="flex items-center">
              <Info className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Instructions
            </div>
          </motion.button>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'checker' ? (
              <motion.div
                key="checker"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-6"
              >
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Bond Numbers
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    value={bondNumbers}
                    onChange={(e) => setBondNumbers(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter numbers separated by commas"
                  />
                  <p className="text-sm text-gray-500 mt-1">Enter bond numbers separated by commas</p>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Draw Winner Numbers
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    value={drawNumbers}
                    onChange={(e) => setDrawNumbers(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter winning numbers separated by commas"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={checkWinner}
                  className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-colors"
                >
                  <div className="flex items-center justify-center">
                    <Search className="h-5 w-5 mr-2" />
                    Check Numbers
                  </div>
                </motion.button>

                <AnimatePresence>
                  {results && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-6 bg-white rounded-lg border border-gray-200"
                    >
                      <div className="p-4">
                        <h3 className="text-lg font-medium mb-4">Results</h3>
                        <div className="space-y-2">
                          <motion.div 
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col md:flex-row md:justify-between py-2 border-b"
                          >
                            <span className="font-medium md:font-normal">Total Bonds Checked</span>
                            <span className="font-medium">{results.totalChecked}</span>
                          </motion.div>
                          <motion.div 
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col md:flex-row md:justify-between py-2 border-b"
                          >
                            <span className="font-medium md:font-normal">Matching Numbers</span>
                            <span className="font-medium">{results.matches}</span>
                          </motion.div>
                          
                          {results.winningNumbers.length > 0 && (
                            <motion.div 
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.3 }}
                              className="flex flex-col md:flex-row md:justify-between py-2"
                            >
                              <span className="font-medium md:font-normal">Winning Numbers</span>
                              <span className="font-medium break-all md:break-normal">{results.winningNumbers.join(', ')}</span>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="instructions"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-lg shadow-lg p-4 md:p-6 border-l-4 border-blue-600 w-full"
              >
                <h3 className="text-xl font-bold mb-6">How to Use the Prize Bond Checker</h3>
                
                <div className="space-y-6">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h4 className="text-lg font-medium mb-2">1. Enter Your Bond Numbers</h4>
                    <p className="text-gray-600 mb-2">
                      Input your prize bond numbers in the first field, separated by commas.
                    </p>
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Example: 123456, 789012, 345678
                      </AlertDescription>
                    </Alert>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="text-lg font-medium mb-2">2. Enter Draw Numbers</h4>
                    <p className="text-gray-600">
                      Input the winning numbers from the draw in the second field, separated by commas.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-lg font-medium mb-2">3. Check Results</h4>
                    <p className="text-gray-600">
                      Click the "Check Numbers" button to see if you have any winning bonds. The results will show:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>Total number of bonds checked</li>
                      <li>Number of matching (winning) bonds</li>
                      <li>List of winning numbers (if any)</li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      {/* Footer */}
<motion.footer 
  initial={{ y: 100 }}
  animate={{ y: 0 }}
  transition={{ delay: 0.4 }}
  className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-6 mt-12"
>
  <div className="container mx-auto px-4 text-center sm:text-left">
    <motion.p 
      whileHover={{ scale: 1.05 }}
      className="flex flex-col sm:flex-row items-center justify-center sm:justify-start"
    >
      
      <span className="flex items-center mt-2 sm:mt-0 sm:ml-2">
        Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Mursalin
      </span>
    </motion.p>
  </div>
</motion.footer>

{/* Toast */}
<AnimatePresence>
  {showToast && (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="fixed top-2 right-2 md:top-4 md:right-4 bg-white rounded-lg shadow-lg p-3 md:p-4 max-w-xs md:max-w-sm"
    >
      <div className="flex items-center">
        <Trophy className="h-5 w-5 text-blue-600 mr-2" />
        <p className="text-gray-800 text-sm md:text-base">{toastMessage}</p>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </motion.div>
  );
};

export default PrizeBondChecker;