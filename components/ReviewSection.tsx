
import React, { useState } from 'react';
import { Review } from '../types';
import { Star, User, MessageCircle } from 'lucide-react';

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
        <h3 className="text-xl font-bold text-gray-800">Avaliações</h3>
        <div className="flex items-center gap-2 bg-pink-50 px-3 py-1 rounded-full">
          <Star size={16} className="text-pink-500" fill="currentColor" />
          <span className="font-bold text-pink-600">{averageRating}</span>
          <span className="text-pink-300 text-xs">({reviews.length})</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-2xl mb-8">
        <p className="text-sm font-semibold text-gray-700 mb-2">Deixe sua nota:</p>
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
                className={star <= newRating ? 'text-pink-500' : 'text-gray-300'} 
                fill={star <= newRating ? 'currentColor' : 'none'}
              />
            </button>
          ))}
        </div>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="O que você achou do produto?"
          className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:outline-none text-sm mb-3"
          rows={3}
        />
        <button
          type="submit"
          className="bg-pink-500 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-pink-600 transition-colors"
        >
          Enviar Comentário
        </button>
      </form>

      {/* List */}
      <div className="space-y-6">
        {reviews.length === 0 ? (
          <p className="text-center text-gray-400 py-4 italic">Ainda não há avaliações para este produto.</p>
        ) : (
          reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((review) => (
            <div key={review.id} className="border-b border-gray-50 pb-6 last:border-0">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-bold text-xs">
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
                      className={s <= review.rating ? 'text-pink-500' : 'text-gray-200'} 
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
