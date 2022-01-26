import 'package:flutter/material.dart';

void main() => runApp(LoginPage());

double screenWidth = 0, screenHeight = 0;

class LoginPage extends StatelessWidget {
  const LoginPage({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Init(),
      theme: ThemeData(
        textTheme: TextTheme(
          bodyText2: TextStyle(fontSize: 30),
        ),
      ),
    );
  }
}

class Init extends StatelessWidget {
  const Init({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    screenWidth = MediaQuery.of(context).size.width;
    screenHeight = MediaQuery.of(context).size.height;
    return Home();
  }
}

class Home extends StatelessWidget {
  Home({Key? key}) : super(key: key);

  Container Pane = Container(
    width: screenWidth * 0.6,
    height: screenHeight * 0.8,
    decoration: BoxDecoration(
      gradient: LinearGradient(
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
        colors: [Colors.transparent, Colors.teal],
      ),
      borderRadius: BorderRadius.all(
        Radius.circular(40),
      ),
    ),
    child: Shell(),
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('LoginPage'),
        flexibleSpace: Container(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [Colors.indigo, Colors.teal],
            ),
          ),
        ),
      ),
      backgroundColor: Colors.red.shade300,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Pane,
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class Shell extends StatelessWidget {
  const Shell({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.fromLTRB(screenWidth * 0.0014, screenWidth * 0.017,
          screenWidth * 0.0015, screenWidth * 0.013),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Center(
            child: SizedBox(
              width: screenWidth * 0.1,
              height: screenHeight * 0.1,
              child: Image.asset('images/logo.png'),
            ),
          ),
          InnerShell(),
        ],
      ),
    );
  }
}

class InnerShell extends StatelessWidget {
  const InnerShell({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.fromLTRB(screenWidth * 0, screenWidth * 0.005,
          screenWidth * 0, screenWidth * 0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: screenWidth * 0.28,
            height: screenHeight * 0.63,
            // color: Colors.lightGreen,
            child: Text("Left"),
          ),
          Container(
            width: screenWidth * 0.28,
            height: screenHeight * 0.63,
            // color: Colors.red,
            child: LoginWindow(), // Login | Register ?
          ),
        ],
      ),
    );
  }
}

class LoginWindow extends StatelessWidget {
  const LoginWindow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // return Container(
      // width: screenWidth * 0.275,
      // color: Colors.purple,
    //   child: to see loginWindow dimensions

    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Padding(
                padding: EdgeInsets.only(bottom: screenHeight * 0.06),
                child: LoginText(),
              ),
            ],
          ),
          EmailField(),
          PasswordField(),
          Padding(
            padding: EdgeInsets.fromLTRB(
              screenWidth * 0.01,
              screenHeight * 0.01,
              screenWidth * 0.01,
              0,
            ),
            child: Row(
              children: [
                LoginInfo(),
                ForgotPassword(),
              ],
            ),
          ),
          Padding(
            padding: EdgeInsets.fromLTRB(
              screenWidth * 0.01,
              screenHeight * 0.01,
              screenWidth * 0.01,
              0,
            ),
            child: Row(
              children: [
                LoginButton(),
                GoogleAuthButton(),
              ],
            ),
          ),
        ],
      ),
    );
    // ); for Container
  }
}

class LoginText extends StatelessWidget {
  const LoginText({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(
          'Login |',
          style: TextStyle(
            fontSize: screenWidth * 0.025,
            color: Colors.white,
          ),
        ),
        TextButton(
            child: Text('Register?'),
            onPressed: () {}, //null
            style: TextButton.styleFrom(
              primary: Colors.white,
              textStyle: TextStyle(fontSize: screenWidth * 0.025),
            )),
      ],
    );
  }
}

class EmailField extends StatelessWidget {
  const EmailField({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: screenWidth * 0.25,
      height: screenHeight * 0.055,
      padding: EdgeInsets.fromLTRB(
        screenWidth * 0.01,
        screenHeight * 0.01,
        screenWidth * 0.01,
        0,
      ),
      child: TextField(
        style: TextStyle(
          fontSize: screenWidth * 0.02,
          fontWeight: FontWeight.w500,
        ),
        decoration: InputDecoration(
          focusedBorder: OutlineInputBorder(
            borderSide:
                BorderSide(color: Colors.white, width: screenWidth * 0.001),
          ),
          enabledBorder: OutlineInputBorder(
            borderSide:
                BorderSide(color: Colors.black, width: screenWidth * 0.001),
          ),
          hintText: 'Email ID',
          hintStyle: TextStyle(
            fontSize: screenWidth * 0.015,
            fontWeight: FontWeight.w300,
          ),
        ),
      ),
    );
  }
}

class PasswordField extends StatelessWidget {
  const PasswordField({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: screenWidth * 0.25,
      height: screenHeight * 0.055,
      padding: EdgeInsets.fromLTRB(
        screenWidth * 0.01,
        screenHeight * 0.01,
        screenWidth * 0.01,
        0,
      ),
      child: TextField(
        style: TextStyle(
          fontSize: screenWidth * 0.02,
          fontWeight: FontWeight.w500,
        ),
        obscureText: true,
        enableSuggestions: false,
        autocorrect: false,
        decoration: InputDecoration(
          focusedBorder: OutlineInputBorder(
            borderSide:
                BorderSide(color: Colors.white, width: screenWidth * 0.001),
          ),
          enabledBorder: OutlineInputBorder(
            borderSide:
                BorderSide(color: Colors.black, width: screenWidth * 0.001),
          ),
          hintText: 'Password',
          hintStyle: TextStyle(
            fontSize: screenWidth * 0.015,
            fontWeight: FontWeight.w300,
          ),
        ),
      ),
    );
  }
}

class LoginInfo extends StatelessWidget {
  const LoginInfo({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextButton(
      style: TextButton.styleFrom(
        // padding: EdgeInsets.symmetric(horizontal: 8.0, vertical: 0),
        primary: Colors.white,
        textStyle: TextStyle(
            fontSize: screenWidth * 0.01, fontWeight: FontWeight.bold),
      ),
      child: const Text('Keep Me Logged In'),
      onPressed: () {}, //null
    );
  }
}

class ForgotPassword extends StatelessWidget {
  const ForgotPassword({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextButton(
      style: TextButton.styleFrom(
        primary: Colors.white,
        textStyle: TextStyle(
            fontSize: screenWidth * 0.01, fontWeight: FontWeight.bold),
      ),
      child: const Text('Forgot Password?'),
      onPressed: () {}, //null
    );
  }
}

class LoginButton extends StatelessWidget {
  const LoginButton({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return IconButton(
      iconSize: screenWidth * 0.04,
      icon: Image.asset('/images/loginButton.ico'),
      onPressed: () {}, //null
    );
  }
}

class GoogleAuthButton extends StatelessWidget {
  const GoogleAuthButton({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ClipOval(
      child: Material(
        child: InkWell(
          onTap: () {},
          child: SizedBox(
            width: screenWidth * 0.04,
            child: Image.asset('images/googleLogin.png'),
          ),
        ),
      ),
    );
  }
}
