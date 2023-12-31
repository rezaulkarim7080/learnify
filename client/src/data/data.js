
// import pizza from "./images/pizza.png";

const data = {
  MenuList: [
    {
      _id: "1",
      "title": "Introduction to Web Development",
      "title_image": "https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1024x784.jpg",
      "description": "Learn the fundamentals of web development, including HTML, CSS, and JavaScript.",
      "category": "Web-Development",
      "duration": "4 weeks",
      "rating": 4.5,
      "num_reviews": 120,
      "price": 49.99,
      "seller_image": "https://www.rose-rosetree.com/wp-content/uploads/2020/01/Matt.jpg",
      "seller_name": "WebDev Academy",
      "learn_from_course": [
        "HTML and CSS basics",
        "JavaScript programming",
        "Building responsive websites"
      ],
      "requirements": [
        "Basic computer skills",
        "Access to a computer with internet connectivity"
      ]
    },
    {
      _id: "2",
      "title": "Python Programming Mastery",
      "title_image": "https://contentstatic.techgig.com/photo/80100245/8-steps-to-master-python-programming-for-data-science.jpg?88712",
      "description": "Become a Python pro with this comprehensive course covering Python fundamentals and advanced topics.",
      "category": "Python-Programming",
      "duration": "6 weeks",
      "rating": 4.8,
      "num_reviews": 250,
      "price": 79.99,
      "seller_image": "https://media.licdn.com/dms/image/C4D03AQEtpEnm-C6y_g/profile-displayphoto-shrink_800_800/0/1561649414298?e=2147483647&v=beta&t=4WXMQboNRJEzZ7VIuP-ipbjxPM8B4yHEXHOw3mjyUMQ",
      "seller_name": "Python Institute",
      "learn_from_course": [
        "Python syntax and data structures",
        "Object-oriented programming",
        "Web scraping and automation"
      ],
      "requirements": [
        "Basic programming knowledge",
        "Access to a computer with Python installed"
      ]
    },
    {
      _id: "3",
      "title": "Machine Learning Fundamentals",
      "title_image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwP_GD1_H_M0G54uQu0tz0v8MPrB1dZuAHLBpxAImrZM3dDnqrzdZ_BmJA2erfKRHscBjhcYJ5Ayk5Ci8fD1EbVmi51op-YkO-PDsctCCZ4OIwQKYJZFuboucOrH9EjcHLBQkKmhGsSfJXt3IbwnX-8u6gGRGYQO_QGPd_7twRE8pcBYXsdvfnUnsr0w/s1640/Machine%20Learning%20(1).png",
      "description": "Dive into the world of machine learning with this course, covering algorithms, data analysis, and model building.",
      "category": "Machine-Learning",
      "duration": "8 weeks",
      "rating": 4.7,
      "num_reviews": 180,
      "price": 99.99,
      "seller_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoOJaeGrvfb47-YhnK7wyygGYAfnhv0S47mhW6DSZBqTI21madSxj71gBGW6Z5VRFfRg&usqp=CAU",
      "seller_name": "ML University",
      "learn_from_course": [
        "Linear regression and classification",
        "Deep learning with TensorFlow",
        "Real-world ML projects"
      ],
      "requirements": [
        "Basic knowledge of Python",
        "Mathematics fundamentals"
      ]
    },
    {
      _id: "4",
      "title": "Data Structures and Algorithms",
      "title_image": "https://images.shiksha.com/mediadata/shikshaOnline/mailers/2022/naukri-learning/what-is/What-is-Data-Structures-and-Algorithms.jpg",
      "description": "Master the art of efficient programming with this course on data structures and algorithms.",
      "category": "Data Structures & Algorithms",
      "duration": "5 weeks",
      "rating": 4.6,
      "num_reviews": 150,
      "price": 69.99,
      "seller_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDk6EjAlhnDn7vTSeIZmLLaWIiIsRDdnmZryMgnAH2HVl8NSJXgmgNtNWtHEHRpEXK46s&usqp=CAU",
      "seller_name": "CodeMasters",
      "learn_from_course": [
        "Arrays, linked lists, and trees",
        "Algorithm analysis",
        "Problem-solving techniques"
      ],
      "requirements": [
        "Basic programming knowledge",
        "Access to a computer with a code editor"
      ]
    },
    {
      _id: "5",
      "title": "Cybersecurity Essentials",
      "title_image": "https://www.campussafetymagazine.com/wp-content/uploads/2021/10/cybersecurity-image-1000x500.jpg",
      "description": "Learn the basics of cybersecurity, including network security, encryption, and ethical hacking.",
      "category": "Cybersecurity",
      "duration": "6 weeks",
      "rating": 4.4,
      "num_reviews": 110,
      "price": 59.99,
      "seller_image": "https://www.coolcatteacher.com/wp-content/uploads/2018/01/image.png",
      "seller_name": "SecureTech",
      "learn_from_course": [
        "Network vulnerabilities",
        "Penetration testing",
        "Security best practices"
      ],
      "requirements": [
        "Basic understanding of computer networks",
        "Access to a computer with internet connectivity"
      ]
    },
    {
      _id: "6",
      "title": "Full Stack Web Development",
      "title_image": "https://www.keycdn.com/img/support/full-stack-development.png",
      "description": "Become a full stack developer by learning both frontend and backend web development.",
      "category": "Web-Development",
      "duration": "10 weeks",
      "rating": 4.9,
      "num_reviews": 300,
      "price": 129.99,
      "seller_image": "https://media.licdn.com/dms/image/C4E03AQGXfTTpwmMQbA/profile-displayphoto-shrink_400_400/0/1595760956727?e=1701302400&v=beta&t=ZjBkDbMIJKUNoYPM1eJ79j-Y7CZstPoBegYISh7w2NE",
      "seller_name": "DevPro",
      "learn_from_course": [
        "Frontend technologies (HTML, CSS, JS)",
        "Backend frameworks (Node.js, Django)",
        "Database management"
      ],
      "requirements": [
        "Basic knowledge of HTML and CSS",
        "Access to a computer with a code editor"
      ]
    },
    {
      _id: "7",
      "title": "Artificial Intelligence and Robotics",
      "title_image": "https://i.ytimg.com/vi/nVFTehaBAkE/sddefault.jpg",
      "description": "Explore the world of AI and robotics, including neural networks and robot programming.",
      "category": "Robotics",
      "duration": "7 weeks",
      "rating": 4.7,
      "num_reviews": 220,
      "price": 89.99,
      "seller_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCNRoD33_6BW9UNonZc3fikuLBqDNM26i5pLIS9f0A2NijgBIP4p3zXsA4CzYh30nC0U&usqp=CAU",
      "seller_name": "AI Wizards",
      "learn_from_course": [
        "Neural networks and deep learning",
        "Robotics programming",
        "AI applications"
      ],
      "requirements": [
        "Basic programming knowledge",
        "Access to a computer with programming software"
      ]
    },
    {
      _id: "8",
      "title": "Database Design and Management",
      "title_image": "https://i.ytimg.com/vi/jOSzuof1A4s/maxresdefault.jpg",
      "description": "Master the principles of database design, SQL, and data management.",
      "category": "Database",
      "duration": "6 weeks",
      "rating": 4.6,
      "num_reviews": 170,
      "price": 79.99,
      "seller_image": "https://schoolsweek.co.uk/wp-content/uploads/2022/04/Robin-walker-inset-500px-400x400.jpg",
      "seller_name": "DataGeeks",
      "learn_from_course": [
        "Relational database design",
        "SQL querying",
        "Data normalization"
      ],
      "requirements": [
        "Basic knowledge of databases",
        "Access to a computer with SQL software"
      ]
    },
    {
      _id: "9",
      "title": "Cloud Computing Essentials",
      "title_image": "https://dpwvt1l09i89o.cloudfront.net/uploads/course-images/1609853875.jpg",
      "description": "Learn about cloud platforms, virtualization, and cloud architecture.",
      "category": "Cloud-Computing",
      "duration": "5 weeks",
      "rating": 4.5,
      "num_reviews": 140,
      "price": 69.99,
      "seller_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmHX32pHRbIInq4-vrF1Xyc363O3WW7g_fD13WmuVurvgrng-AP3oS6Sf4W89DI2MtyFU&usqp=CAU",
      "seller_name": "CloudTech",
      "learn_from_course": [
        "Cloud service providers (AWS, Azure)",
        "Virtualization technologies",
        "Cloud security"
      ],
      "requirements": [
        "Basic understanding of IT concepts",
        "Access to a computer with internet connectivity"
      ]
    },
    {
      _id: "10",
      "title": "Mobile App Development",
      "title_image": "https://www.etatvasoft.com/blog/wp-content/uploads/2022/08/mobile-app-development-methodologies.jpg",
      "description": "Create mobile apps for iOS and Android using popular development frameworks.",
      "category": " Web-Development",
      "duration": "8 weeks",
      "rating": 4.8,
      "num_reviews": 260,
      "price": 99.99,
      "seller_image": "https://media.licdn.com/dms/image/D4D03AQH9fgRNRIGHeQ/profile-displayphoto-shrink_400_400/0/1695225392436?e=1701302400&v=beta&t=yFIOFrHSmm6sLSYIHoQge3auGMkxa1_cUQRM_EpnDzg",
      "seller_name": "MobileTech",
      "learn_from_course": [
        "iOS and Android app development",
        "UI/UX design for mobile",
        "App deployment and distribution"
      ],
      "requirements": [
        "Basic knowledge of programming",
        "Access to a computer with app development tools"
      ]
    },
    {
      _id: "11",
      "title": "Advanced Data Science",
      "title_image": "https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg",
      "description": "Take your data science skills to the next level with advanced techniques and real-world projects.",
      "duration": "10 weeks",
      "category": "Data-Science",
      "rating": 4.9,
      "num_reviews": 300,
      "price": 129.99,
      "seller_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7O5ZN-ufLusilngDPUUC8dj4ebcTdbT-WqQ-tmXHY4BtOEQz6iB329F0CbgL85yu9kCo&usqp=CAU",
      "seller_name": "DataXperts",
      "learn_from_course": [
        "Machine learning algorithms",
        "Big data analysis",
        "Data visualization"
      ],
      "requirements": [
        "Intermediate data science knowledge",
        "Access to a computer with data analysis tools"
      ],
      "upcoming": true
    },
    {
      _id: "12",
      "title": "Blockchain  Fundamentals",
      "title_image": "https://i.ytimg.com/vi/HVhafPNesHI/maxresdefault.jpg",
      "description": "Learn the basics of blockchain technology and cryptocurrencies, and explore their potential applications.",
      "category": "Blockchain",
      "duration": "6 weeks",
      "rating": 4.7,
      "num_reviews": 150,
      "price": 69.99,
      "seller_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBCKJdGY44VxdBCzgRBZr5Q8x5XAMDiNvc_6Dv-TF17LUMi4klUBGAANANwtvQVx7a7_8&usqp=CAU",
      "seller_name": "CryptoLearn",
      "learn_from_course": [
        "Blockchain principles",
        "Cryptocurrency mining",
        "Smart contracts"
      ],
      "requirements": [
        "Basic understanding of computer science",
        "Access to a computer with internet connectivity"
      ],
      "upcoming": true
    },
    {
      _id: "13",
      "title": "Cloud DevOps Engineering",
      "title_image": "https://enteriscloud.com/wp-content/uploads/2021/10/How-is-Cloud-Computing-Dependant-on-DevOps.png",
      "description": "Learn how to manage and automate cloud infrastructure for DevOps processes.",
      "category": "Cloud-Computing",
      "duration": "8 weeks",
      "rating": 4.8,
      "num_reviews": 260,
      "price": 99.99,
      "seller_image": "https://library.ascd.org/m/5ff484f51b50c86b/webimage-Paul-Erickson.png",
      "seller_name": "CloudOpsPro",
      "learn_from_course": [
        "Cloud deployment tools",
        "Continuous integration and continuous deployment (CI/CD)",
        "Infrastructure as code (IaC)"
      ],
      "requirements": [
        "Basic knowledge of cloud computing",
        "Access to cloud services"
      ],
      "upcoming": true
    }
  ]
}

export default data;