let feedback = {
  status: '',
  tags: [],
  comment: '',
};

export const handleFeedback = (data) => {
  feedback = {
    status: data.status,
    tags: data.tags,
    comment: data.comment,
  };
  console.log(feedback);
};

export const sendFeedback = () => {
  console.log('enviando feedback pro servidor...');
};
