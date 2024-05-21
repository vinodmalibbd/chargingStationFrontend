function createUserFeedbackCard(firstName, lastName, comment, rating) {
    const cardDiv = document.createElement('div');
    const userInfoDiv = document.createElement('div');
    const userCommentDiv = document.createElement('div');
    const userRatingDiv = document.createElement('div');
    const ratingSpan = document.createElement('span');
    const starIcons = [];
    
    cardDiv.classList.add('user-feedback-card');
    userInfoDiv.classList.add('user-info');
    userCommentDiv.classList.add('user-comment');
    userRatingDiv.classList.add('user-rating');
    ratingSpan.classList.add('rating');

    userInfoDiv.textContent = `<p><strong>Name:</strong> ${firstName} ${lastName}</p>`;
    userCommentDiv.textContent = `<p><strong>Comment:</strong> ${comment}</p>`;
    

    for (let i = 0; i < 5; i++) {
      const starIcon = document.createElement('i');
      starIcon.classList.add('fas', 'fa-star');
      if (i < rating) {
        starIcon.classList.add('rated');
      }
      starIcons.push(starIcon);
      ratingSpan.appendChild(starIcon);
    }
    
    userRatingDiv.appendChild(document.createElement('p').appendChild(document.createElement('strong').appendChild(document.createTextNode('Rating: '))));
    userRatingDiv.appendChild(ratingSpan);
    
    cardDiv.appendChild(userInfoDiv);
    cardDiv.appendChild(userCommentDiv);
    cardDiv.appendChild(userRatingDiv);
    
    return cardDiv;
  }
  
  // Usage example:
  const feedbackCard = createUserFeedbackCard('vinod', 'mali', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 4);
  document.body.appendChild(feedbackCard);
  