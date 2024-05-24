function createFeedbackCard(feedback) {
    const card = document.createElement('div');
    card.className = 'feedback-card';

    const userDiv = document.createElement('div');
    userDiv.className = 'feedback-user-info';

    const initialsDiv = document.createElement('div');
    initialsDiv.className = 'feedback-initials';
    initialsDiv.textContent = feedback.initials;

    const userInfoDiv = document.createElement('div');

    const userNameDiv = document.createElement('div');
    userNameDiv.className = 'map-feedback-name';
    userNameDiv.textContent = feedback.name;

    const ratingDiv = document.createElement('div');
    ratingDiv.className = 'feedback-rating';
    ratingDiv.textContent = '★'.repeat(feedback.rating) + ' ' + feedback.rating;

    const dateDiv = document.createElement('div');
    dateDiv.className = 'feedback-date';
    dateDiv.textContent = feedback.date;

    userInfoDiv.appendChild(userNameDiv);
    userInfoDiv.appendChild(ratingDiv);
    userInfoDiv.appendChild(dateDiv);

    userDiv.appendChild(initialsDiv);
    userDiv.appendChild(userInfoDiv);

    const vehicleDiv = document.createElement('div');
    vehicleDiv.className = 'feedback-vehicle-info';

    const timeAgoDiv = document.createElement('div');
    timeAgoDiv.className = 'feedback-time-ago';
    timeAgoDiv.textContent = feedback.timeAgo;

    const vehicleNameDiv = document.createElement('div');
    vehicleNameDiv.className = 'feedback-vehicle-name';
    vehicleNameDiv.textContent = feedback.vehicle;

    vehicleDiv.appendChild(timeAgoDiv);
    vehicleDiv.appendChild(vehicleNameDiv);

    card.appendChild(userDiv);
    card.appendChild(vehicleDiv);

    return card;
}

function renderFeedback(feedbackList) {
    // const feedbackContainer = document.querySelector('.main_content');
    const feedbackContainer = document.createElement('div');
    feedbackContainer.className='main_content';
    document.body.appendChild(feedbackContainer);

    feedbackContainer.innerHTML = ''; // Clear existing content

    feedbackList.forEach(feedback => {
        const card = createFeedbackCard(feedback);
        feedbackContainer.appendChild(card);
    });
}

// Example feedback data
const feedbackList = [
    {
        initials: 'JS',
        name: 'Jaspreet Singh',
        rating: 5,
        date: '',
        timeAgo: '4 days ago',
        vehicle: 'BYD Atto 3'
    },
    {
        initials: 'AG',
        name: 'Amit Gupta',
        rating: 5,
        date: '',
        timeAgo: '1 month ago',
        vehicle: 'Tata Nexon EV'
    },
    {
        initials: 'SK',
        name: 'Sunil K',
        rating: 4,
        date: '',
        timeAgo: '1 month ago',
        vehicle: 'Tata Nexon EV'
    },
    {
        initials: 'J',
        name: 'Jitendar',
        rating: 4,
        date: '',
        timeAgo: '1 month ago',
        vehicle: 'Hyundai IONIQ 5'
    },
    {
        initials: 'DV',
        name: 'Daljeet Virdi',
        rating: 5,
        date: '',
        timeAgo: '1 month ago',
        vehicle: 'Tata Nexon EV'
    }
];
