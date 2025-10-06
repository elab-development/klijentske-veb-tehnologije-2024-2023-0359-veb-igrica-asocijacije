import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Crown, Award, RotateCcw } from 'lucide-react';
import { fetchRandomPhoto, type UnsplashPhoto } from '../lib/unsplash';

type ResultState = {
  boardId: string;
  finalSolution: string;
  finalSolver?: 'red' | 'blue';
  scores: { red: number; blue: number };
  winner: 'red' | 'blue' | 'tie';
  columns: Array<{ solution: string; solver?: 'red' | 'blue'; points: number }>;
  finishedAt: string;
};

export default function ResultPage() {
  const loc = useLocation();
  const data = loc.state as ResultState | undefined;

  const [winnerPhoto, setWinnerPhoto] = useState<UnsplashPhoto | null>(null);
  const [loserPhoto, setLoserPhoto] = useState<UnsplashPhoto | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!data) return;
    const abort = new AbortController();
    const { winner } = data;

    const qWinner =
      winner === 'tie' ? 'handshake balance' : 'trophy confetti celebration';
    const qLoser =
      winner === 'tie' ? 'handshake balance' : 'defeat disappointment';

    (async () => {
      try {
        setLoading(true);
        const [wp, lp] = await Promise.all([
          fetchRandomPhoto(qWinner, { signal: abort.signal }),
          fetchRandomPhoto(qLoser, { signal: abort.signal }),
        ]);
        setWinnerPhoto(wp);
        setLoserPhoto(lp);
      } finally {
        setLoading(false);
      }
    })();

    return () => abort.abort();
  }, [data]);

  if (!data) {
    return (
      <section className='max-w-3xl mx-auto space-y-4'>
        <h1 className='text-2xl font-bold'>Results</h1>
        <p className='text-gray-600'>No result data found.</p>
        <Link
          to='/game'
          className='inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white shadow-lg hover:shadow-xl'
        >
          <RotateCcw className='h-5 w-5' /> Back to Game
        </Link>
      </section>
    );
  }

  return (
    <section className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Results</h1>
        <div className='text-sm text-gray-500'>
          Board: <span className='font-semibold'>{data.boardId}</span> · Final:{' '}
          <span className='font-semibold'>{data.finalSolution}</span>
        </div>
      </div>

      <div className='rounded-2xl shadow-lg p-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Crown className='h-6 w-6 text-yellow-500' />
        </div>
        <div className='text-sm text-gray-500 flex items-center gap-2'>
          <Award className='h-4 w-4' />
          Final solver:{' '}
          {data.finalSolver ? data.finalSolver.toUpperCase() : '—'}
        </div>
      </div>

      <div className='flex gap-3'>
        <Link
          to='/game'
          className='inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white shadow-lg hover:shadow-xl'
        >
          <RotateCcw className='h-5 w-5' />
          Play again
        </Link>
      </div>
    </section>
  );
}
