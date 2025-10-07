import { Link } from 'react-router-dom';
import { Play, History } from 'lucide-react';

export default function HomePage() {
  return (
    <section className='space-y-8'>
      <div className='rounded-3xl shadow-xl p-8 md:p-12 bg-white'>
        <div className='flex flex-col lg:flex-row items-start lg:items-center gap-6'>
          <div className='flex-1'>
            <h1 className='text-3xl md:text-4xl font-extrabold tracking-tight'>
              Word Association Game
            </h1>
            <p className='mt-3 text-gray-600 max-w-xl'>
              Open clues, guess column solutions, and crack the final word. Two
              players — Red vs Blue. Keep score, view results, and track your
              stats over time.
            </p>
          </div>

          <div className='w-full lg:w-96 rounded-2xl shadow-lg p-5'>
            <h3 className='font-semibold flex items-center gap-2'>
              <Play className='h-5 w-5' />
              How to play
            </h3>
            <ul className='mt-3 text-sm text-gray-600 space-y-2'>
              <li>• Reveal one clue, then guess a column or the final.</li>
              <li>• Correct guess keeps your turn; wrong guess passes it.</li>
              <li>• Column score depends on how many clues were opened.</li>
              <li>• Solve final to collect remaining column points.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        <div className='xl:col-span-2 rounded-3xl shadow-xl p-6'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-bold flex items-center gap-2'>
              <History className='h-5 w-5' /> Recent results
            </h2>
            <Link
              to='/stats'
              className='text-sm px-3 py-1 rounded-xl bg-gray-900 text-white shadow-md hover:shadow-lg'
            >
              Open Stats
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
