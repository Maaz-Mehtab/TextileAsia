
export class GenericConstants {
    static BaseURL = "http://124.29.235.10:8081/";
    // static BaseURL = "http://tms.colgate-palmolive.com.pk:2020/";
    // static ApiURL = "http://tms.colgate-palmolive.com.pk:2020/Services/MobileAPI.svc/";
    // static ApiURL = "http://124.29.235.10:8081/Services/MobileAPI.svc/";
    // static ApiURL = "http://192.168.18.3/TextileVisitor/";
    static ApiURL = "http://72.18.130.108/~maaz/TextileAsiaApp/";

    static ApiHeaders =
        {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
    static FormDataHeaders = {
        'Content-Type': 'multipart/form-data',
    };
}

export class ApiMethodNames {
    // static UserLogin = "UserLogin";
    static Visitor = "Visitor.php";
    static Exhibitor = "Exhibitor.php";
    static Count = "Count.php";
    static VisitorRegister = "VisitorRegister.php?";
    static Registeruser = "Registeruser.php";
    static Login = "Login.php";
    static MeetingInsert = "MeetingInsert.php";
    static ReadMeeting = "ReadMeeting.php";
    static CancelMeeting = "CancelMeeting.php";

    // static TextileVisitor = "TextileVisitor";



}

export class ResponseStatus {
    static Success = 200;
    static DataNotFound = 204;
    static DataSaved = 202;
    static AuthenticationFailure = 417;
}
export class TMSStatus {
    // static appearances = {
    //     Pending: 1,
    //     'Approved': 2,
    //     'Rejected':3
    //   }
    static Pending = "Pending";
    static Approved = "Approved";
    static Rejected = "Rejected";
}
export const LeaveType = [
    { id: 1, value: "Sick" },
    { id: 2, value: "Annual" },
    { id: 3, value: "Casual" },
    { id: 4, value: "Maternity" },
    { id: 5, value: "Default" },
    { id: 6, value: "WithoutPay" },
    { id: 7, value: "Official" },
    { id: 8, value: "HalfDay" },

]
export const Roles = [
    { id: 5, value: "Admin" },
    { id: 6, value: "Incharge" },
    { id: 7, value: "Employee" },
    { id: 8, value: "Super Admin" },
    { id: 9, value: "TimeOfficer" },
    { id: 10, value: "Group Admin" },
    { id: 11, value: "Shift Incharge" },
]

export const Menu = [
    { MenuId: 368, ManuName: "Home" },
    { MenuId: 343, ManuName: "Incharge" },
    { MenuId: 7, ManuName: "Employee" },
    { MenuId: 8, ManuName: "Super Admin" },
    { id: 9, value: "TimeOfficer" },
    { id: 10, value: "Group Admin" },
    { id: 11, value: "Shift Incharge" },
]

// export const Screen=[
//     {}
// ];

// export class Role {
//     static Incharge = "Incharge"
//     static Employee = "Employee"
//     static SuperAdmin = "Super Admin"
//     static TimeOfficer = "TimeOfficer"
//     static GroupAdmin = "Group Admin"
//     static ShiftIncharge = "Shift Incharge"
// }
export class ResponseCodes {
    static Success = "200";
}

export class ErrorMessages {
    static EnterMobilePassword = "Please provide Mobile Number and Password";
    static NoUserLogin = "Invalid Email/Password";
    static NoFoundData = "No Data Found";
    static ApplyLeaveError = "Your Leave Request is not Correct";
    static NoDealsCategoriesFound = "No Deals Categories found";
    static LeaveHistoryNotFound = "Leave History Not Found";
}
export class Colors {
    static TextBlack = "#000000";
    static TextRed = '#fa1003';
    static TextYellow = "#FFD400";
    static TextWhite = "#FFFFFF";
    static TextGray = "#999595";
    static BorderRed = '#fa1003';
    static BorderBlack = "#000000";
    static ButtonYellow = "#FFD400";
    static BackgroundWhite = "#F7F7F7";
    static BackgroundPureWhite = "#FFFFFF";
    static MenuItemBackgroundColor = "#e9e9e9";
    static FooterRed = "#fa1003";
    static PlaceholderGray = "#c0c0c0";
    static BackgroundLightGray = "#e9e9e9";
}
export class MainHeaders {
    static width = '100%';
    static alignItems = 'center';
    static flexDirection = 'row';
    static backgroundColors = '#1ab394';
    static height = 50;
}


export class HeaderBody {

    static width = '100%';
    static height = 50;
    static alignItems = 'center';
    static justifyContent = 'center';

}
export class box1 {


    static height = 'auto';
    static width = '98%';
    static margin = 10;
    static borderColor = '#23c6c8';
    static borderWidth = 2;
    static borderStyle = 'solid';
    static backgroundColor = 'white';
}
export class box1Header {
    static width = '100%';
    static height = 45;
    static backgroundColor = '#23c6c8';
    static alignItems = 'center';
    static justifyContent = 'center';
}
export class box1Title {
    static fontSize = 18;
    static color = 'white';
    static fontWeight = 'bold';

}
export class box1Child1 {
    static width = '31%';
    static margin = 4;
    static backgroundColor = '#1ab394';
    static alignItems = 'center';
    static height = 60;
}
export class box1child1Title {
    static fontSize = 17;
    // static textDecorationLine= 'underline';
    static color = 'white';
    static height = 40;

}
export class box2child1Title {
    static fontSize = 12.25;
    static color = 'white';
    static fontWeight = 'bold';
    static alignItems = 'center';
}
export class box2child1Title2 {
    static color = 'white';
    static borderBottomWidth = 1;
    static borderBottomColor = '#d1dade';
    static borderStyle = 'solid';
    static alignItems = 'center';
}

