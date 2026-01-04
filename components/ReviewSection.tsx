
import React, { useState } from 'react';
import { Review } from '../types';
import { Star } from 'lucide-react';

interface ReviewSectionProps {
  reviews: Review[];
  onAddReview: (rating: number, comment: string) => void;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews, onAddReview }) => {
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddReview(newRating, newComment);
      setNewComment('');
      setNewRating(5);
    }
  };

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : 0;

  return (
    <div className="mt-8 pt-8 border-t border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800 font-serif">Avaliações</h3>
        <div className="flex items-center gap-2 bg-orange-50 px-3 py-1 rounded-full">
          <Star size={16} className="text-[#C5A059]" fill="currentColor" />
          <span className="font-bold text-[#C5A059]">{averageRating}</span>
          <span className="text-[#D8B4A6] text-xs">({reviews.length})</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-2xl mb-8">
        <p className="text-sm font-semibold text-gray-700 mb-2">Sua nota técnica:</p>
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setNewRating(star)}
              className="focus:outline-none transition-transform active:scale-90"
            >
              <Star 
                size={24} 
                className={star <= newRating ? 'text-[#C5A059]' : 'text-gray-300'} 
                fill={star <= newRating ? 'currentColor' : 'none'}
              />
            </button>
          ))}
        </div>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Compartilhe seu resultado com o produto..."
          className="w-full p-3 rounded-xl border border-gray-200 focus:ring-1 focus:ring-[#C5A059] focus:outline-none text-sm mb-3"
          rows={3}
        />
        <button
          type="submit"
          className="bg-[#2D2D2D] text-white px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-colors"
        >
          Enviar Avaliação
        </button>
      </form>

      <div className="space-y-6">
        {reviews.length === 0 ? (
          <p className="text-center text-gray-400 py-4 italic text-sm">Ainda não há avaliações para este produto.</p>
        ) : (
          [...reviews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((review) => (
            <div key={review.id} className="border-b border-gray-50 pb-6 last:border-0">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#C5A059] font-bold text-xs">
                    {review.user.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-800">{review.user}</p>
                    <p className="text-[10px] text-gray-400">{new Date(review.date).toLocaleDateString('pt-BR')}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star 
                      key={s} 
                      size={12} 
                      className={s <= review.rating ? 'text-[#C5A059]' : 'text-gray-200'} 
                      fill={s <= review.rating ? 'currentColor' : 'none'} 
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-10">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
