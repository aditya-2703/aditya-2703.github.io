// --------------------------  start certificate - loader
var certificates_data = [
    {
        heading:"python language",
        date:"Mar 8,2020",
        link:"Crash Course on python From Google.",
        tag:"python",
        modal_title:"Python From Google Coursera.",
        modal_para : "Completed this 28-hours long course on basics of python which covered all the beginner level concepts of python language. Course was followed by an assessment, providing certificate to qualifying ones.",
        modal_img:"/assets/images/certificates/certi_1.jpg"
    },
    {
        heading:"dsa workshop",
        date:"Mar 9,2021",
        link:"Completing Workshop on Dsa From Gfg.",
        tag:"gfg",
        modal_title:"Dsa Workshop From GeeksforGeeks",
        modal_para : "Completed this 11-weeks long workshop on basics of data-structures and algorithms with it's implementation which covered all the basic concepts of dsa and approaches to solve related problems. Workshop was followed by an assessment, providing certificate to qualifying ones.",
        modal_img:"/assets/images/certificates/certi_2.jpg"
    },
    {
        heading:"Problem Solving",
        date:"May 5,2020",
        link:"Certified in Problem Solving From Hackerrank.",
        tag:"ps",
        modal_title:"Problem Solving From Hackerrank",
        modal_para : "Certified in Problem Solving skills by Hackerrank on clearing 2-hours long exam which consisted of solving 3-4 algorithmic problems.",
        modal_img:"/assets/images/certificates/certi_3.png"
    },
    {
        heading:"linux operating system",
        date:"May 19,2020",
        link:"Certified in NDG Linux os From Cisco.",
        tag:"cisco",
        modal_title:"NDG Linux Certified From Cisco",
        modal_para : "Completed this 8-hours long course on basics-of- linux with it's implementation which covered all the basic concepts of linux operating system. Course was followed by an assessment, providing certificate to qualifying ones. ",
        modal_img:"/assets/images/certificates/certi_4.jpg"

    },
    {
        heading:"Data Science",
        date:"June 16,2020",
        link:"Python 101 for Data-Science From Ibm.",
        tag:"ibm",
        modal_title:"Data-Science in python From Ibm Cognitive Classes",
        modal_para : "Completed this 5-module course on basics of data-science with it's implementation which covered all the basic concepts of data-science and modules like numpy and pandas. Workshop was followed by an assessment, which I cleared with 95% grade.",
        modal_img:"/assets/images/certificates/certi_5.jpg"
    },
    {
        heading:"Java language",
        date:"Apr 29,2022",
        link:"Certified in Java Language From Hackerrank",
        tag:"java_hackerrank",
        modal_title:"Certified in Java From Hackerrank",
        modal_para : "Certified in Java by Hackerrank on clearing 2-hours long exam which consisted of solving 3-4 algorithmic  and language based problems.",
        modal_img:"/assets/images/certificates/certi_6.png"
    },
    {
        heading:"Front-end Fundamentals",
        date:"June 16,2020",
        link:"Certified in Front-end Fundamentals From Pirple.",
        tag:"pirple",
        modal_title:"Certified in Front-end Fundamentals From Pirple.",
        modal_para : "Completed  this 9-module course on basics of Front-end with Designing websites which covered all the basic concepts of front-end based on HTML and CSS. Course was followed by an assessment, providing certificate to qualifying ones.",
        modal_img:"/assets/images/certificates/certi_7.jpg"
    },
    {
        heading:"Responsive Web-Designs",
        date:"May 22,2021",
        link:"Certified in Responsive Web-Designs From Freecodecamp.",
        tag:"freecodecamp",
        modal_title:"Responsive Design From Freecodecamp",
        modal_para : "Completed this 300-hours long course on basics of HTML and CSS  along with Responsiveness design which covered all the basic concepts related to responsive design. Course was followed by an assessment, providing certificate to qualifying ones.",
        modal_img:"/assets/images/certificates/certi_8.png"
    },
    {
        heading:"Sql Language",
        date:"Feb 4,2021",
        link:"Certified in Foundations of Database Sql by Oracle.",
        tag:"oracle",
        modal_title:"Basics of Sql From Oracle Dev Gym. ",
        modal_para : "Completed this 12+ modules course on basics of SQL with it's implementation which course covered all the basic concepts of SQL and related problem solving. Course was followed by an assessment, providing certificate to qualifying ones.",
        modal_img:"/assets/images/certificates/certi_9.jpg"

    }
]

function load_certi_modal_data(index){
    let data = certificates_data[index]
    let img_ele = document.querySelector(".modal_c_img")
    let img_date= document.querySelector(".modal_c_date")
    let img_title = document.querySelector(".modal_c_title")
    let img_para = document.querySelector(".modal_c_para")
    img_ele.src = data.modal_img
    img_date.innerHTML = data.date
    img_title.innerHTML = data.modal_title
    img_para.innerHTML = data.modal_para

}
function load_certificates(){
    let parent = document.querySelector(".certification_list_container")
    for(let i=0;i<certificates_data.length;i++){
        let data = certificates_data[i]
        let img_name = `certification_${i+1}.png`
        if(i==5){
            img_name = `certification_${3}.png`
        }
        let template = `
        <div  onclick="load_certi_modal_data(${i})" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" class="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
        <div class="rn-blog" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
            <div class="inner">
                <div class="thumbnail">
                    <a href="javascript:void(0)">
                        <img src="assets/images/my_img/${img_name}" alt="Personal Portfolio Images">
                    </a>
                </div>
                <div class="content">
                    <div class="category-info">
                        <div class="category-list">
                            <a href="javascript:void(0)">${data.heading}</a>
                        </div>
                        <div class="meta">
                            <span><img src="/assets/images/calendar.svg"> ${data.date}</span>
                        </div>
                    </div>
                    <h4 class="title"><a href="javascript:void(0)">
                        ${data.link}
                            <i data-feather="arrow-up-right"></i></a></h4>
                </div>
            </div>
        </div>
        </div>`
        parent.innerHTML+=template

    }
}
load_certificates()

// --------------------------  end certificate - loader


// --------------------------  start project - loader

var projects_data = [
    {
        domain:"Web-app",
        mode:"Website",
        heading:"DSA-HUB a Web-app for real-life application of dsa with sub-projects.",
        image:"/assets/images/portfolio/web_1.png",
        tag:["web"],
        name:"DSA-HUB",
        intro:"Dsa-Hub is all about how you can use different data-structures and algorithms to solve real-life problems. With this idea and concept, I have developed games and projects based on specific data-structures and algorithms. ",
        tech_stack:["HTML","CSS","JAVASCRIPT"],
        glink:"https://www.dsa-hub.ml/",
        modal_img:"/assets/images/portfolio/web_1_poster.png"
    },
    {
        domain:"Web-site",
        mode:"Website",
        heading:"Full stack website to digitalize hospital management system.",
        image:"/assets/images/portfolio/web_2.png",
        tag:["web"],
        name:"HOSPITAL MANAGEMENT SYSTEM",
        intro:"Hospital Management System is full-stack website build to digitalize the hospital system. This website consists of services related to hospital system which like taking appointment, selecting doctors, register appointment, among many others. You can also enrol for courses to learn about medical related topics. Apart from that you will also be updated with the latest news and events. Database is also maintained in this website.",
        tech_stack:["HTML","CSS","BOOTSTRAP","JAVASCRIPT","PYTHON","DJANGO","SQLLITE"],
        glink:"https://github.com/aditya-2703/WEB_DEV_PROJECTS/tree/main/FULL%20STACK%20WEBSITE/HOSPITAL_MANAGEMENT_SYSTEM",
        modal_img:"/assets/images/portfolio/web_2_poster.gif"
    },
    {
        domain:"Web-site",
        mode:"Website",
        heading:"E-commerce a full stack website for online shoping.",
        image:"/assets/images/portfolio/web_3.png",
        tag:["web"],
        name:"E-COMMERCE",
        intro:"E-Commerce is website related to shopping where you can explore and buy items. You can also search items using their name and category. The feature involved in it allows purchasing without sign in and placing order with convenient payment method of your choice. Database is also maintained in this website.",
        tech_stack:["HTML","CSS","BOOTSTRAP","JAVASCRIPT","PYTHON","DJANGO","SQLLITE"],
        glink:"https://github.com/aditya-2703/WEB_DEV_PROJECTS/tree/main/FULL%20STACK%20WEBSITE/E_COMMERCE",
        modal_img:"/assets/images/portfolio/web_3_poster.gif"
    },
    {
        domain:"Web-site",
        mode:"Website",
        heading:"Save your memories with full stack website Image Gallery.",
        image:"/assets/images/portfolio/web_4.png",
        tag:["web"],
        name:"IMAGE-GALLERY",
        intro:"Image-Gallery is a clone of Imagesbazaar where you can add image with it's category and description and that image is saved in database. You also have the ability to download the image from this website. You also filter images by their category. You can upload images of any dimensions.",
        tech_stack:["HTML","CSS","BOOTSTRAP","JAVASCRIPT","PYTHON","DJANGO","SQLLITE"],
        glink:"https://github.com/aditya-2703/WEB_DEV_PROJECTS/tree/main/FULL%20STACK%20WEBSITE/IMAGE-GALLERY",
        modal_img:"/assets/images/portfolio/web_4_poster.gif"
    
    },
    {
        domain:"Web-site",
        mode:"Website",
        heading:"Update your knowledge with Fact-site.",
        image:"/assets/images/portfolio/web_5.png",
        tag:["web"],
        name:"FACT-SITE",
        intro:"Fact-Site is a website where you can get access to facts and their categories. You can also search facts related to their name and category. You can generate random facts and update your knowledge.",
        tech_stack:["HTML","CSS","BOOTSTRAP","JAVASCRIPT"],
        glink:"https://github.com/aditya-2703/WEB_DEV_PROJECTS/blob/main/JAVASCRIPT/PROJECT/FACTS_SITE",
        modal_img:"/assets/images/portfolio/web_5_poster.gif"
    },
    {
        domain:"Web-site",
        mode:"Website",
        heading:"Choose your career smartly with Career-rank.",
        image:"/assets/images/portfolio/web_6.png",
        tag:["web"],
        name:"CAREER-RANK",
        intro:"Career-rank is website which was built during my internship at NMR-Enterprise. This project was team based where my contribution included front-end and Content. This website is perfect roadmap and guidance for students who are beginner in their journey of career. This website consists of all the path related to computer engineering and IT field. Students can get path or roadmap via year wise activities required to accomplish their goal it provides counselling to students for their better future with minimalistic payment the payment system integrate here is razor pay.",
        tech_stack:["HTML","CSS","BOOTSTRAP","JAVASCRIPT","PHP","MYSQL"],
        glink:"https://marshmallowdash.herokuapp.com/",
        modal_img:"/assets/images/portfolio/web_6_poster.jpeg"
    },
    {
        domain:"Game",
        mode:"Gui",
        heading:"Python Gui game named Hit-Man.",
        image:"/assets/images/portfolio/game_1.png",
        tag:["game"],
        name:"HIT-MAN",
        intro:"Hit-Man is a game which I developed when I was learning python with py-game module. This is a very fun game where you have to operate the main character with your arrow-keys and the goal is to maximize the score. If your score is less than the enemy then you lose the game. Play and enjoy.",
        tech_stack:["PYTHON","PYGAME"],
        glink:"https://github.com/aditya-2703/PYTHON_PROJECTS/tree/main/HIT_MAN",
        modal_img:"/assets/images/portfolio/game_1_poster.gif"
    },
    {
        domain:"Game",
        mode:"Gui",
        heading:"Python Gui game named Space-Invaders.",
        image:"/assets/images/portfolio/game_2.png",
        tag:["game"],
        name:"SPACE-INVADERS",
        intro:"Space-invaders is a game which mostly all people used to play in their childhood. It is build using pygame module.This game requires that the player operates plane with arrow-keys and shoots random generated demons. If demons touch the plane or cross the plane then game ends. The score is displayed on top left corner in the screen. Enjoy this game and recall your childhood.",
        tech_stack:["PYTHON","PYGAME"],
        glink:"https://github.com/aditya-2703/PYTHON_PROJECTS/tree/main/SPACE_INVADERS_GAME",
        modal_img:"/assets/images/portfolio/game_2_poster.gif"
    },
    {
        domain:"Game",
        mode:"Gui",
        heading:"Web based game named Flip-cards.",
        image:"/assets/images/portfolio/game_3.png",
        tag:["game","web"],
        name:"FLIP-CARDS",
        intro:"This website is based on the game which we used to play in our childhood with cards. All cards are flipped backwards and we pick a card one by one and flip it forwards. If this picked card matches with the face up cards then the score increases of that player. You can play this game by installing it on your local machine.",
        tech_stack:["HTML","CSS","JAVASCRIPT"],
        glink:"https://github.com/aditya-2703/WEB_DEV_PROJECTS/tree/main/JAVASCRIPT/PROJECT/FLIP_CARD",
        modal_img:"/assets/images/portfolio/game_3_poster.gif"
    },  
    {
        domain:"Ai-Ml",
        mode:"Cli",
        heading:"Hand digit recognition Ml model.",
        image:"/assets/images/portfolio/aiml_1.png",
        tag:["aiml"],
        name:"HAND-DIGIT-RECOGNITION",
        intro:"Hand digit recognition is simply a machine learning based project which is based on k-nearest-neighbour algorithm. This model is built with kNN and by providing learning data so that it can learn from it for proper functionality. This model is able to obtain the value of the digit present in hand written form in the supplied image.",
        tech_stack:["PYTHON","MACHINE-LEARNING","JUPYTER-NOTEBOOK"],
        glink:"https://github.com/aditya-2703/MACHINE_LEARNING/tree/main/KNN-CLASSIFICATION/Hand_digit",
        modal_img:"/assets/images/portfolio/aiml_1_poster.jpeg"
    },
    {
        domain:"Ai-Ml",
        mode:"Cli",
        heading:"Face recognition based Ml model.",
        image:"/assets/images/portfolio/aiml_2.png",
        tag:["aiml"],
        name:"FACE-RECOGNITION",
        intro:"Face-Recognition is a project based on machine-learning and computer vision. It is based on integration of machine learning with computer-vision. You simply have to run it on your machine. It will ask your name along with picture of your face. It stores this input data and uses it later when you ask about your identity as an input image, to provide you with the correct answer.",
        tech_stack:["PYTHON","MACHINE-LEARNING","MEDIA-PIPE LIB","JUPYTER-NOTEBOOK"],
        glink:"https://github.com/aditya-2703/MACHINE_LEARNING/tree/main/KNN-CLASSIFICATION/FACE-RECOGNITION",
        modal_img:"/assets/images/portfolio/aiml_2._poster.png"
    },    
    {
        domain:"Ai-Ml",
        mode:"Cli",
        heading:"Mood recognition based Ml model.",
        image:"/assets/images/portfolio/aiml_3.png",
        tag:["aiml"],
        name:"MOOD-RECOGNITION",
        intro:"Mood-Recognition is an extended version of face-recognition where you can recognize your mood like happy, sad or angry on the basis of your faces. This project is based on integration of machine-learning and computer vision. You simply have to run it on your machine. It will ask you for your mood with pictures of your face. . It stores this input data and uses it later when you ask about your mood as an input image, to provide you with the correct answer.",
        tech_stack:["PYTHON","MACHINE-LEARNING","MEDIA-PIPE LIB","JUPYTER-NOTEBOOK"],
        glink:"https://github.com/aditya-2703/MACHINE_LEARNING/tree/main/KNN-CLASSIFICATION/MOOD_DETECTION",
        modal_img:"/assets/images/portfolio/aiml_3_poster.png"
    },
    {
        domain:"Ai-Ml",
        mode:"Cli",
        heading:"Predict home price with home price-predictor. ",
        image:"/assets/images/portfolio/aiml_4.png",
        tag:["aiml"],
        name:"HOME-PRICE-PREDICTION",
        intro:"Home Price Prediction is a machine learning based project. It is a linear regression based model which is able to predict the price of home by it's parameters like  dimension and area. The model is trained using a csv file with historic data containing home parameters and their respective prices. These data lead to correct prediction by the model.",
        tech_stack:["PYTHON","MACHINE-LEARNING","JUPYTER-NOTEBOOK"],
        glink:"https://github.com/aditya-2703/MACHINE_LEARNING/tree/main/LINEAR-REGRESSION/HOME%20PRICE%20PREDICTION",
        modal_img:"/assets/images/portfolio/aiml_4_poster.png"
    },    
    {
        domain:"Ai-Ml-Cv",
        mode:"Cli",
        heading:"Adjust your volume with your fingers.",
        image:"/assets/images/portfolio/aiml_5.png",
        tag:["aiml"],
        name:"VOLUME-ADJUSTER",
        intro:"Volume-Adjuster is a computer vision based advance project where you can control volume with your fingers. This project uses media-pipe library for taking hand movement. For using this module, you just have to run it and move your fingers and boom !! You can see the changes in your volume.",
        tech_stack:["PYTHON","MACHINE-LEARNING","MEDIA-PIPE LIB","COMPUTER-VISION","OPEN-CV","JUPYTER-NOTEBOOK"],
        glink:"https://github.com/aditya-2703/OPENCV_PYTHON/tree/main/PROJECTS/VOLUME_ADJUSTER",
        modal_img:"/assets/images/portfolio/aiml_5_poster.gif"
    },    
    {
        domain:"Ai-Ml-Cv",
        mode:"Cli",
        heading:"Let your machine tells your finger count.",
        image:"/assets/images/portfolio/aiml_6.png",
        tag:["aiml"],
        name:"FINGER-COUNTER",
        intro:"Finger-Counter is a computer vision based advance project where you can count your fingers by just showing in camera. This project uses media-pipe library for taking hand movement. For using this module, you just have to run it and give gesture of your fingers and boom!! You can see the count of your fingers being shown on your screen.",
        tech_stack:["PYTHON","MACHINE-LEARNING","MEDIA-PIPE LIB","COMPUTER-VISION","OPEN-CV","JUPYTER-NOTEBOOK"],
        glink:"https://github.com/aditya-2703/OPENCV_PYTHON/tree/main/PROJECTS/FINGER_COUNT",
        modal_img:"/assets/images/portfolio/aiml_6_poster.gif"
    },
    {
        domain:"Java",
        mode:"Cli",
        heading:"Get your nsdl data from Nsdl-Parser.",
        image:"/assets/images/portfolio/sde_1.png",
        tag:["sde"],
        name:"NSDL-PARSER",
        intro:"Nsdl-Parser is a java-based project. This project takes nsdl statement pdf along with it's password(if is protected). It parses the whole pdf and fetches the data in proper format and generates csv's like crediential , mutual funds , holding among many others. I built this project during my internship period at MyDhan Company. This project is built by analyzing patterns found using regex and use them to separate and extract the data.",
        tech_stack:["JAVA","REGEX","PARSING"],
        glink:"https://github.com/aditya-2703/JAVA_PROJECTS/tree/main/PROJECTS/Pdf_parsor_with_to_csv",
        modal_img:"/assets/images/portfolio/sde_1_poster.jpeg"
    },
    {
        domain:"App Development",
        mode:"Mobile App",
        heading:"Get your eggs perfect with Egg-timer.",
        image:"/assets/images/portfolio/app_1.png",
        tag:["sde","app"],
        name:"EGG-TIMER",
        intro:"Egg-timer is beginner friendly project which is an mobile app. You can use this app for while cooking. This is simple timer-based app used when you put egg for boiling and just start the timer from this app and after some x time it generate the sound so that you can take off eggs.",
        tech_stack:["JAVA","ANDROID-DEVELOPMENT"],
        glink:"https://github.com/aditya-2703/ANDROID_PROJECTS/tree/main/EGG-TIMER",
        modal_img:"/assets/images/portfolio/app_1_poster.jpeg"
    },
    {
        domain:"App Development",
        mode:"Mobile App",
        heading:"Get your bags full without forgeting anything.",
        image:"/assets/images/portfolio/app_2.png",
        tag:["sde","app"],
        name:"Grocery -DIARY",
        intro:"Grocery-diary is mobile app that remembers the grocery items when someone give you the list of items for shopping. All people mostly face this problem during for shopping then and there are some items which we forget so grocery-diary is here to help you. You just have to type and add the items to this app. You can also send this list of items in various platforms like WhatsApp, Facebook, Telegram, Instagram etc.",
        tech_stack:["JAVA","ANDROID-DEVELOPMENT"],
        glink:"https://github.com/aditya-2703/ANDROID_PROJECTS/tree/main/GLOSSARY-DIARY",
        modal_img:"/assets/images/portfolio/app_2_poster.jpeg"
    },
    {
        domain:"App Development",
        mode:"Mobile App",
        heading:"Get your concept clear with Quiz-app.",
        image:"/assets/images/portfolio/app_3.png",
        tag:["sde","app"],
        name:"QUIZ-APP",
        intro:"Quiz app is simply a mobile app which has java-based quiz in MCQ format. You can check your java knowledge with this quiz-app. There are a total of 10 questions. After attempt your marks are calculated and displayed. You can also share these marks on platforms like WhatsApp, Telegram etc.",
        tech_stack:["JAVA","ANDROID-DEVELOPMENT"],
        glink:"https://github.com/aditya-2703/ANDROID_PROJECTS/tree/main/QUIZ",
        modal_img:"/assets/images/portfolio/app_3_poster.jpeg"
    },
    {
        domain:"App Development",
        mode:"Mobile App",
        heading:"Check your wheather now with Weather-app.",
        image:"/assets/images/portfolio/app_4.png",
        tag:["sde","app"],
        name:"WEATHER-APP",
        intro:"Weather-app is purely API based mobile app which takes city name as input and gives the weather information related to that city. Weather-API is used here for fetching the data.",
        tech_stack:["JAVA","ANDROID-DEVELOPMENT"],
        glink:"https://github.com/aditya-2703/ANDROID_PROJECTS/tree/main/WEATHER-APP",
        modal_img:"/assets/images/portfolio/app_4_poster.jpeg"
    },
]
function load_all_projects(){
    
    let parent = document.querySelector(".portfolio_box_container")
    for(let i=0;i<projects_data.length;i++){
        let data = projects_data[i]
        let img_name = data.image
    
        let template = `
            <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                        <div class="rn-portfolio" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                            <div class="inner">
                                <div class="thumbnail">
                                    <a href="javascript:void(0)">
                                        <img src="${img_name}" alt="Personal Portfolio Images">
                                    </a>
                                </div>
                                <div class="content">
                                    <div class="category-info">
                                        <div class="category-list">
                                            <a href="javascript:void(0)">${data.domain}</a>
                                        </div>
                                        <div class="meta">
                                            <span><a href="javascript:void(0)"><i class="feather-heart"></i></a>${data.mode}</span>
                                        </div>
                                    </div>
                                    <h4 class="title"><a href="javascript:void(0)">${data.heading}<img
                                        src="/assets/images/arrow-up-right.svg" class="feather-arrow-up-right"></a></h4>
                                </div>
                            </div>
                        </div>
                </div>
    
        `
        parent.innerHTML+=template       
    }
}


function load_project_modal_data(index){
    let data = projects_data[index]
    let img_ele = document.querySelector(".modal_work_img")
    let img_date= document.querySelector(".modal_work_date")
    let img_title = document.querySelector(".modal_work_title")
    let img_para = document.querySelector(".modal_work_intro")
    let tech_stack = document.querySelector(".modal_work_ul")
    let glink = document.querySelector(".modal_work_glink")
    img_ele.src = data.modal_img
    img_date.innerHTML = data.heading
    img_title.innerHTML = data.name
    img_para.innerHTML = data.intro
    glink.href = data.glink
    tech_stack.innerHTML = ""
    for(let i=0;i<data.tech_stack.length;i++){
        let li = document.createElement("li")
        li.innerHTML = data.tech_stack[i]
        tech_stack.appendChild(li)
    }

}
function load_project(goal_tag){
    let parent = document.querySelector(".portfolio_box_container")
    parent.innerHTML = ""

    for(let i=0;i<projects_data.length;i++){
        let data = projects_data[i]
        if(!data.tag.includes(goal_tag)){
            console.log(data.tag,"not include",goal_tag)
            continue
        }
        
        let img_name = data.image

        let template = `
        <div onclick="load_project_modal_data(${i})" data-aos="fade-up" data-aos-delay="100" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
        <div class="rn-portfolio" data-bs-toggle="modal" data-bs-target="#exampleModalCenters">
            <div class="inner">
                <div class="thumbnail">
                    <a href="javascript:void(0)">
                        <img src="${img_name}" alt="Personal Portfolio Images">
                    </a>
                </div>
                <div class="content">
                    <div class="category-info">
                        <div class="category-list">
                            <a href="javascript:void(0)">${data.domain}</a>
                        </div>
                        <div class="meta">
                            <span>${data.mode}</span>
                        </div>
                    </div>
                    <h4 class="title"><a href="javascript:void(0)">${data.heading}<img
                        src="/assets/images/arrow-up-right.svg" class="feather-arrow-up-right"></a></h4>
                </div>
            </div>
        </div>
        </div>

        `
        parent.innerHTML+=template       
    }


}
function load_portfolio_project(ele){
    let child = ele.querySelector("a")
    child.classList.add("active")
    load_project(ele.id)
}

load_portfolio_project(document.getElementById("web"))

// --------------------------  end project - loader


// ------------------------------- start services- modal -loader
function load_service_modal_data(ele){
    let service_data = [
        {
            img:"/assets/images/my_img/experties_ps.png",
            heading:"Problem Solving",
            para:"Problem Solving is one of the most important skills in the field of IT. It is the ability to solve problems by understanding user’s perspective. I developed this skill by practicing more and more problems and developing corresponding solutions. For practicing, I used the following platforms:",
            list:["Leetcode","GeeksforGeeks","Hackerrank","Coding-ninja"],
            extra_para:"It's not necessary to solve 1000+ problem for mastering the skills, you just need good quality problem set in which all the concepts and patterns are covered. After solving these sets and learning from them, you are able to think the patterns by yourself and it provides scope for improvement.",
            link:"https://github.com/aditya-2703/DSA"
        },
        {
            
            img:"/assets/images/my_img/experties_wd.png",
            heading:"Web Development",
            para:"One of the skills in my bucket is web development. I have learned this skill by developing more and more projects based on fundamentals of web development. I have built around 15+ projects (beginner , intermediate, expert) in this field. The areas of my expertise in web development are :",
            list:["HTML - strcutre","CSS - styling","SCSS - advanced styling","BOOTSTRAP - framework","FIGMA - designing","JAVASCRIPT - scripting","Django - backend framework","Sql-database"],
            extra_para:"You can visit the link below to checkout my web development projects.",
            link:"https://github.com/aditya-2703/WEB_DEV_PROJECTS"
        },
        {
            
            img:"/assets/images/my_img/experties_sd.png",
            heading:"Software Development",
            para:"Software is just a program with more lines of code. It is a collection of algorithms and data structures that are used to solve a particular problem. I developed this skill by holding concepts and building various projects, including games for my personal use along with small modules for company’s ongoing project. I am well aware with languages and concepts including :",
            list:["Core - dsa, os, dbms, cn","Python - building games and gui apps","Java - building nsdl parser , mail reader","Web Dev - building websites","Ml Dev - building models and projects"],
            extra_para:"You can visit my github profile for projects related to each domain.",
            link:"https://github.com/aditya-2703"
        },
        {
            
            img:"/assets/images/my_img/experties_ml.png",
            heading:"Machine Learning",
            para:"I developed many machine learning models and built projects with them. These projects include Computer-vision, different machine learning algorithms among others. I also used many built in libraries and apis to build my projects. The tools and technology used include:",
            list:["Python - programming language","Jupyter Notebook - Environment","Opencv - computer vision","Ml algo - build models","Data science - familier with numpy ,pandas and matplotlib"],
            extra_para:"You can visit the link below to view machine learning and computer vision projects.",
            link:"https://github.com/aditya-2703"
        }
    ]
    let data = service_data[ele.id]
    let img_ele = document.querySelector(".modal_work_img")
    let body_par = document.querySelector(".modal_parent_body")
    let img_title = document.querySelector(".modal_work_title")
    let img_para = document.querySelector(".modal_work_intro")
    let img_para2 = document.querySelector(".modal_work_intro2")
    let tech_stack = document.querySelector(".modal_work_ul")
    let glink = document.querySelector(".modal_work_glink")
    let date = document.querySelector(".modal_work_date")
    
    
    date.innerHTML = ""
    document.querySelector(".tech_stack_desc").innerHTML = ""
    
    img_ele.src = data.img
    img_title.innerHTML = data.heading
    img_para.innerHTML = data.para
    glink.href = data.link
    glink.innerHTML = "Visite Here"
    img_para2.innerHTML = data.extra_para
    tech_stack.innerHTML = ""
    for(let i=0;i<data.list.length;i++){
        let li = document.createElement("li")
        li.innerHTML = data.list[i]
        tech_stack.appendChild(li)
    }


}
// ------------------------------- start services- modal -loader



feather.replace();



