const isShowedProjects = false;
const isShowedOtherProjects = false;
const isShowedTechnicalNotes = false;
const isShowedMyStories = false;
const isShowedMySeries = false;
const host = 'https://nguyenthienly.github.io/MY_PROFILE';

let projects = [];
let otherProjects = [];
let technicalNotes = [];
let myStories = [];
let mySeries = [];
let socials = [];
let topicSeries = [];
let menu = [];

let songs = [
    { src: "http://vnso-zn-11-tf-mp3-320s1-zmp3.zadn.vn/d98f2c023245db1b8254/6546470370986397328?authen=exp=1588684606~acl=/d98f2c023245db1b8254/*~hmac=3d342d241abb7fe7aeabd32de2f24735", name: "Di Dau De Thay Hoa Bay", singer: "Hoang Dung" },
    { src: "http://vnso-zn-10-tf-mp3-320s1-zmp3.zadn.vn/125dbfb125f5ccab95e4/7795452054882009040?authen=exp=1588683794~acl=/125dbfb125f5ccab95e4/*~hmac=2f03b6ad54ab57e3f912357e520819a4", name: "Noi Anh Ve", singer: "Binz" }
];
let audioPlayer = new Audio();
// audioPlayer.autoplay = true;
let currentSong = 0;

let gists = [{
        _id: 'eb6d3ba19738a717cd8201aed273199a',
        author: 'NguyenThienLy',
        title: 'Import vs require'
    },
    {
        _id: '84a19dd44ae1b0290a4fbeabbe2e0824',
        author: 'NguyenThienLy',
        title: 'Unit test in typescript by jest'
    },
    {
        _id: '56b9526b4ab60f55ab73dc848ce17041',
        author: 'NguyenThienLy',
        title: 'integrate jade into typescript expressjs'
    },
    {
        _id: '4939a7abd67ea114c21b73ac30348b84',
        author: 'NguyenThienLy',
        title: 'Create CV with BEM - 1'
    },
    {
        _id: '719f202047c56e7748de5c9eed868cfe',
        author: 'NguyenThienLy',
        title: 'Create CV with BEM - 2'
    },
    {
        _id: '2dca16a4ea0ef6c2303f196fd7808c6b',
        author: 'NguyenThienLy',
        title: 'What is closure?'
    },
    {
        _id: '56201f0d7c11b263c5eb2e079ea3b4e5',
        author: 'NguyenThienLy',
        title: 'Synthesis about git'
    },
];

// let projects = [
//   {
//     _id: '0',
//     img: 'http://picsum.photos/550',
//     name: 'Ecommerce web app',
//     description: ` A commercial web shopping application to help users easily purchase and order management and
//     administration for admin including product deletion and order management.`,
//     note: 'This project has brought me lots of useful knowledge',
//     topics: [
//       { name: 'React.js', title: 'React.js', link: '#' },
//       { name: 'Chart.js', title: 'Chart.js', link: '#' },
//       { name: 'Firebase API', title: 'Firebase API', link: '#' }
//     ],
//     repos: [
//       { title: 'github', link: 'https://github.com/NguyenThienLy/PROJECT_INTERN_DSV', icon: 'fab fa-sm fa-github' }
//     ]
//   },
//   {
//     _id: '1',
//     img: 'http://picsum.photos/600',
//     name: 'Yoga website + webapp',
//     description: `Website showing news for the center to introduce timetable courses, class schedules, teachers,
//     yoga news blog, a dedicated management system for center students.`,
//     note: 'This is first startup project that my team built',
//     topics: [
//       { name: 'Next.js', title: 'Next.js', link: '#' },
//       { name: 'typescript', title: 'typescript', link: '#' },
//       { name: 'React.js', title: 'React.js', link: '#' },
//       { name: 'Redux.js', title: 'Redux.js', link: '#' },
//       { name: 'MongoDB', title: 'MongoDB', link: '#' },
//     ],
//     repos: [
//       { title: 'github', link: 'https://github.com/NguyenThienLy/PEGASUS_SHIVOM', icon: 'fab fa-sm fa-github' },
//       { title: 'website', link: 'https://hiephoayoga.com', icon: 'fas fa-sm fa-external-link-alt' },
//     ]
//   },
//   {
//     _id: '2',
//     img: 'http://picsum.photos/650',
//     name: 'Organic food web app',
//     description: `   An organic food website for everyone with a friendly interface that makes it easy
//     for users to view items according to orders,
//     the system management for admin includes additional statistical products.`,
//     note: 'This is first project about web that my team built',
//     topics: [
//       { name: 'Express.js', title: 'Express.js', link: '#' },
//       { name: 'MySql', title: 'MySql', link: '#' },
//       { name: 'Firebase', title: 'Firebase', link: '#' },
//     ],
//     repos: [{
//       title: 'github',
//       link: 'https://github.com/NguyenThienLy/WebProject_PTUDW',
//       icon: 'fab fa-sm fa-github'
//     },
//     {
//       title: 'youtube',
//       link: 'https://www.youtube.com/watch?v=dkMCSs4bPEM&feature=youtu.be&fbclid=IwAR0-z1Gm6nbUB-rab0cd3vK86DnCVTCq6o7AUusa5bk5jEUev_6StoEuIns',
//       icon: 'fab fa-sm fa-youtube'
//     },
//     ]
//   },
// ];

// let otherProjects = [
//   {
//     _id: '0',
//     name: 'Canteen management',
//     description: `Cafeteria and food management software helps the cafeteria admin easily
//     capture food and deliver it to customers`,
//     note: '',
//     topics: [
//       { name: 'WPF', title: 'WPF', link: '#' },
//       { name: 'SQL Server', title: 'SQL Server', link: '#' },
//       { name: 'Material design', title: 'Material design', link: '#' }
//     ],
//     repos: [
//       { title: 'github', link: 'https://github.com/NguyenThienLy/ISE_NNDK_13', icon: 'fab fa-sm fa-github' }
//     ]
//   },
//   {
//     _id: '1',
//     name: 'Marketing management',
//     description: `Human resource management software for marketing department, attendance, statistics, KPI
//     calculation, import file. `,
//     note: 'This is first project that i built in first company i worked',
//     topics: [
//       { name: 'Winform', title: 'Winform', link: '#' },
//       { name: 'Devexpress', title: 'Devexpress', link: '#' },
//       { name: 'SQL server', title: 'SQL server', link: '#' }
//     ],
//     repos: [
//       { title: 'youtube', link: 'https://www.youtube.com/watch?v=fBms2WxC664&feature=youtu.be', icon: 'fab fa-sm fab fa-youtube' }
//     ]
//   },
//   {
//     _id: '2',
//     name: 'POSM and BBD management',
//     description: `Image management software for supermarkets and sale staff, showing pixels, importing
//     from pdf files`,
//     note: '',
//     topics: [
//       { name: 'Winform', title: 'Winform', link: '#' },
//       { name: 'Devexpress', title: 'Devexpress', link: '#' },
//       { name: 'SQL server', title: 'SQL server', link: '#' }
//     ],
//     repos: [
//       { title: 'github', link: '#', icon: 'fab fa-sm fa-github' }
//     ]
//   },
//   {
//     _id: '3',
//     name: 'Search map home',
//     description: `The app finds inns and check-in rooms, making it easy for
//     landlords and renters to find each other`,
//     note: '',
//     topics: [
//       { name: 'Android', title: 'Android', link: '#' },
//       { name: 'Firebase', title: 'Firebase', link: '#' },
//       { name: 'Heremap', title: 'Heremap', link: '#' },
//       { name: 'googlemap', title: 'googlemap', link: '#' }
//     ],
//     repos: [
//       { title: 'github', link: 'https://github.com/NguyenThienLy/ProjectAndroid_G8', icon: 'fab fa-sm fa-github' }
//     ]
//   },
//   {
//     _id: '4',
//     name: 'Profile profesional for Dev',
//     description: `This is profile for us, it have my information and my blogs`,
//     note: '',
//     topics: [
//       { name: 'HTML', title: 'HTML', link: '#' },
//       { name: 'CSS', title: 'CSS', link: '#' },
//       { name: 'JS', title: 'JS', link: '#' },
//       { name: 'BEM', title: 'BEM', link: '#' }
//     ],
//     repos: [
//       { title: 'website', link: 'https://nguyenthienly.github.io/MY_PROFILE/', icon: 'fas fa-sm fa-external-link-alt' }
//     ]
//   },
//   {
//     _id: '5',
//     name: 'Weather at your favorite place',
//     description: `The app helps you find places and see the weather in that area, manage the list of favorite
//     places`,
//     note: '',
//     topics: [
//       { name: 'typescript', title: 'typescript', link: '#' },
//       { name: 'googlemap', title: 'googlemap', link: '#' },
//       { name: 'darkskymap', title: 'darkskymap', link: '#' },
//     ],
//     repos: [
//       { title: 'gitlab', link: 'https://gitlab.com/NguyenThienLy/3_idiots', icon: 'fab fa-sm fa-gitlab' }
//     ]
//   },
// ];

// let technicalNotes = [
//   {
//     _id: '2dca16a4ea0ef6c2303f196fd7808c6b',
//     name: 'What is closure?',
//     date: '10/04/2020',
//     description: `Xin chào tất cả mọi người, mọi người có biết closures à gì không?
//     Đối với một người mới đi làm như mình thì cũng mơ hồ...`,
//     note: '',
//     topics: [
//       { name: 'Javascript', title: 'Javascript', link: '#' },
//       { name: 'Closure', title: 'Closure', link: '#' }
//     ],
//     repos: [
//       { title: 'gist.github', link: 'https://gist.github.com/2dca16a4ea0ef6c2303f196fd7808c6b.git', icon: 'fab fa-sm fa-github' },
//       { title: 'dev.to', link: 'https://dev.to/nguyenthienly/what-is-closure-closure-la-gi-1m4b', icon: 'fab fa-sm fa-dev' }
//     ]
//   },
//   {
//     _id: '84a19dd44ae1b0290a4fbeabbe2e0824',
//     name: ' Unit test in typescript by jest',
//     date: '01/04/2020',
//     description: `Xin chào tất cả mọi người, làm developer thì ai cũng phải viết unit test
//     (Định nghĩa phần 2) phải không nào...`,
//     note: '',
//     topics: [
//       { name: 'Nodejs', title: 'Nodejs', link: '#' },
//       { name: 'Javascript', title: 'Javascript', link: '#' },
//       { name: 'Jest', title: 'Jest', link: '#' },
//       { name: 'Unit test', title: 'Unit test', link: '#' },
//     ],
//     repos: [
//       { title: 'gist.github', link: 'https://gist.github.com/84a19dd44ae1b0290a4fbeabbe2e0824.git', icon: 'fab fa-sm fa-github' },
//       { title: 'dev.to', link: 'https://dev.to/nguyenthienly/unit-test-in-typescript-by-jest-hb0', icon: 'fab fa-sm fa-dev' }
//     ]
//   },
//   {
//     _id: '56b9526b4ab60f55ab73dc848ce17041',
//     name: 'Intergrate jade into typescript ...',
//     date: '30/03/2020',
//     description: `Xin chào tất cả mọi người, trước đây khi bắt đầu sử dụng import để thay thế
//     require một package hay một module đã có để sử dụng.`,
//     note: '',
//     topics: [
//       { name: 'Nodejs', title: 'Nodejs', link: '#' },
//       { name: 'Javascript', title: 'Javascript', link: '#' },
//       { name: 'Jade', title: 'Jade', link: '#' },
//       { name: 'Typescript', title: 'Typescript', link: '#' },
//     ],
//     repos: [
//       { title: 'gist.github', link: 'https://gist.github.com/56b9526b4ab60f55ab73dc848ce17041.git', icon: 'fab fa-sm fa-github' },
//       { title: 'dev.to', link: 'https://dev.to/nguyenthienly/intergrate-jade-into-typescript-expressjs-281l', icon: 'fab fa-sm fa-dev' }
//     ]
//   },
//   {
//     _id: 'eb6d3ba19738a717cd8201aed273199a',
//     name: 'Import vs require',
//     date: '29/03/2020',
//     description: `Xin chào tất cả mọi người, trước đây khi bắt đầu sử dụng import để thay thế
//     require một package hay một module đã có để sử dụng.`,
//     note: '',
//     topics: [
//       { name: 'Nodejs', title: 'Nodejs', link: '#' },
//       { name: 'Javascript', title: 'Javascript', link: '#' },
//     ],
//     repos: [
//       { title: 'gist.github', link: 'https://gist.github.com/eb6d3ba19738a717cd8201aed273199a.git', icon: 'fab fa-sm fa-github' },
//       { title: 'dev.to', link: 'https://dev.to/nguyenthienly/import-vs-require-3kmn', icon: 'fab fa-sm fa-dev' }
//     ]
//   },
// ]

// let myStories = [
//   {
//     _id: '0',
//     name: 'Hồi kí về quá trình đi phỏng vấn',
//     date: '../04/2020',
//     description: `Xin chào tất cả mọi người, mình chỉ là thằng sinh viên còn chưa ra trường. Nhưng 
//     quá máu nên đã đi làm từ năm hai ...`,
//     note: '',
//     topics: [
//       { name: 'interview', title: 'interview', link: '#' },
//       { name: 'experience', title: 'experience', link: '#' },
//     ],
//     repos: [
//       { title: 'gist.github', link: '#', icon: 'fab fa-sm fa-github' },
//       { title: 'dev.to', link: '#', icon: 'fab fa-sm fa-dev' }
//     ]
//   },
//   {
//     _id: '1',
//     name: 'Kinh nghiệm làm việc nhóm',
//     date: '../04/2020',
//     description: `Xin chào tất cả mọi người, làm việc nhóm là gì tại sao phải học cách làm việc nhóm,
//     làm thế nào hiệu quả ...`,
//     note: '',
//     topics: [
//       { name: 'teamwork', title: 'teamwork', link: '#' },
//       { name: 'experience', title: 'experience', link: '#' },
//     ],
//     repos: [
//       { title: 'gist.github', link: '#', icon: 'fab fa-sm fa-github' },
//       { title: 'dev.to', link: '#', icon: 'fab fa-sm fa-dev' }
//     ]
//   },
// ]

// let mySeries = [
//   {
//     _id: '4939a7abd67ea114c21b73ac30348b84',
//     name: 'Create CV with BEM - 1',
//     date: '02/04/2020',
//     description: `Xin chào tất cả mọi người, trước đây khi mà mình đi xin việc thì đến giai đoạn nộp CV, 
//     thì mình hay lên topcv.vn hay là ...`,
//     note: '',
//     topics: [
//       { name: 'HTML', title: 'HTML', link: '#' },
//       { name: 'CSS', title: 'CSS', link: '#' },
//       { name: 'JS', title: 'JS', link: '#' },
//       { name: 'BEM', title: 'BEM', link: '#' },
//       { name: 'gist.github', title: 'gist.github', link: '#' },
//     ],
//     repos: [
//       { title: 'gist.github', link: 'https://gist.github.com/4939a7abd67ea114c21b73ac30348b84.git', icon: 'fab fa-sm fa-github' },
//       { title: 'dev.to', link: 'https://dev.to/nguyenthienly/create-cv-with-bem-4io1', icon: 'fab fa-sm fa-dev' }
//     ]
//   },
//   {
//     _id: '719f202047c56e7748de5c9eed868cfe',
//     name: 'Create CV with BEM - 2',
//     date: '01/04/2020',
//     description: `Thông thường thì mọi người code html, csss, mỗi khi thêm một ít
//     code mới lại refresh khá mất thời gian ...`,
//     note: '',
//     topics: [
//       { name: 'Nodejs', title: 'Nodejs', link: '#' },
//       { name: 'Javascript', title: 'Javascript', link: '#' },
//       { name: 'Jest', title: 'Jest', link: '#' },
//       { name: 'Unit test', title: 'Unit test', link: '#' },
//     ],
//     repos: [
//       { title: 'gist.github', link: 'https://gist.github.com/719f202047c56e7748de5c9eed868cfe.git', icon: 'fab fa-sm fa-github' },
//       { title: 'dev.to', link: 'https://dev.to/nguyenthienly/create-cv-with-bem-2-29m7', icon: 'fab fa-sm fa-dev' }
//     ]
//   },
// ]