function createFeedbackCard(feedback) {
  const card = document.createElement("div");
  card.className = "feedback-card";

  const userDiv = document.createElement("div");
  userDiv.className = "feedback-user-info";

  const initialsDiv = document.createElement("div");
  initialsDiv.className = "feedback-initials";
  initialsDiv.textContent = feedback.initials;

  const userInfoDiv = document.createElement("div");

  const userNameDiv = document.createElement("div");
  userNameDiv.className = "map-feedback-name";
  userNameDiv.textContent = feedback.name;

  const userdiscription = document.createElement("div");
  userdiscription.className = "map-feedback-comment";
  userdiscription.textContent = feedback.name;

  const ratingDiv = document.createElement("div");
  ratingDiv.className = "feedback-rating";
  ratingDiv.textContent = "★".repeat(feedback.rating) + " " + feedback.rating;

  userInfoDiv.appendChild(userNameDiv);
  userInfoDiv.appendChild(userdiscription);

  userDiv.appendChild(initialsDiv);
  userDiv.appendChild(userInfoDiv);

  const feebackrightside = document.createElement("div");
  feebackrightside.className = "feedback-vehicle-info";

  const timeAgoDiv = document.createElement("div");
  timeAgoDiv.className = "feedback-time-ago";
  timeAgoDiv.textContent = feedback.timeAgo;

  feebackrightside.appendChild(ratingDiv);

  card.appendChild(userDiv);
  card.appendChild(feebackrightside);

  return card;
}

function renderFeedback(feedbackList) {
  const feedbackContainer = document.querySelector(".main_content");

  // document.body.appendChild(feedbackContainer);

  const feedbackheadingOnBooking = document.createElement("h2");
  feedbackheadingOnBooking.className = "feedbackheadingOnBooking";
  feedbackheadingOnBooking.textContent = "FeedBack";
  feedbackContainer.appendChild(feedbackheadingOnBooking);

  feedbackList.forEach((feedback) => {
    const card = createFeedbackCard(feedback);
    feedbackContainer.appendChild(card);
  });
}

const feedbackList = [
  {
    initials: "JS",
    name: "Jaspreet Singh",
    rating: 5,
    date: "",
    timeAgo: "4 days ago",
    vehicle: "BYD Atto 3",
  },
  {
    initials: "AG",
    name: "Amit Gupta",
    rating: 5,
    date: "",
    timeAgo: "1 month ago",
    vehicle: "Tata Nexon EV",
  },
  {
    initials: "SK",
    name: "Sunil K",
    rating: 4,
    date: "",
    timeAgo: "1 month ago",
    vehicle: "Tata Nexon EV",
  },
  {
    initials: "J",
    name: "Jitendar",
    rating: 4,
    date: "",
    timeAgo: "1 month ago",
    vehicle: "Hyundai IONIQ 5",
  },
  {
    initials: "DV",
    name: "Daljeet Virdi",
    rating: 5,
    date: "",
    timeAgo: "1 month ago",
    vehicle: "Tata Nexon EV",
  },
];
