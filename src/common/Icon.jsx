const Icon = (props) => {
    const IconList = {
        click: (
            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4833 17.6687L19.1208 10.0312L17.6042 8.51449L11.4833 14.6353L8.39584 11.5478L6.87917 13.0645L11.4833 17.6687ZM5.41667 22.8687C4.82084 22.8687 4.31059 22.6563 3.88592 22.2317C3.46125 21.807 3.24928 21.2971 3.25 20.702V5.53532C3.25 4.93949 3.46234 4.42924 3.887 4.00457C4.31167 3.5799 4.82156 3.36793 5.41667 3.36865H20.5833C21.1792 3.36865 21.6894 3.58099 22.1141 4.00565C22.5388 4.43032 22.7507 4.94021 22.75 5.53532V20.702C22.75 21.2978 22.5377 21.8081 22.113 22.2327C21.6883 22.6574 21.1784 22.8694 20.5833 22.8687H5.41667Z" fill="#82B2C2" />
            </svg>

        ),
        leftArrow: (
            <svg className={`stroke-black group-hover:stroke-white`} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0573 6.18284L8.67187 10.5682L13.0573 14.9536" stroke-width="1.75416" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ),
        rightArrow: (
            <svg className={`stroke-white group-hover:stroke-deep-blue`} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.15953 6.18284L13.5449 10.5682L9.15953 14.9536" stroke-width="1.75416" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        messageIcon: (
            <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.8887 0.506592H2.88867C1.51367 0.506592 0.401172 1.63159 0.401172 3.00659L0.388672 18.0066C0.388672 19.3816 1.51367 20.5066 2.88867 20.5066H22.8887C24.2637 20.5066 25.3887 19.3816 25.3887 18.0066V3.00659C25.3887 1.63159 24.2637 0.506592 22.8887 0.506592ZM22.8887 5.50659L12.8887 11.7566L2.88867 5.50659V3.00659L12.8887 9.25659L22.8887 3.00659V5.50659Z" fill="white" />
            </svg>

        ),
        callIcon: (
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.0687 17.0133C21.4287 17.0133 19.842 16.7466 18.362 16.2666C17.8953 16.1066 17.3753 16.2266 17.0153 16.5866L14.922 19.2133C11.1487 17.4133 7.61534 14.0133 5.73534 10.1066L8.33534 7.89326C8.69534 7.51993 8.802 6.99993 8.65534 6.53326C8.162 5.05326 7.90867 3.46659 7.90867 1.82659C7.90867 1.10659 7.30867 0.506592 6.58867 0.506592H1.97534C1.25534 0.506592 0.388672 0.826592 0.388672 1.82659C0.388672 14.2133 10.6953 24.5066 23.0687 24.5066C24.0153 24.5066 24.3887 23.6666 24.3887 22.9333V18.3333C24.3887 17.6133 23.7887 17.0133 23.0687 17.0133Z" fill="white" />
            </svg>

        ),
        arrow: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z" />
                <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
            </svg>
        ),
    };
    return (
        <span className={`flex ${props.className}`} >
            {props.iconName && IconList[props.iconName]}
        </span >
    )


}

export default Icon