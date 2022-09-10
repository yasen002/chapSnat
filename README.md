# Week 5 day 2

/..

# Part A: Lab time with GiftedChat 🧪

- Fork this chapsnat repo!
- Clone your forked version
- run `yarn install` to kickstart it (download all the dependencies)
  - Discuss: why do we need to do this? What exactly is it doing?
- run `expo start` to make sure it's working. Should just be a "starter" React Native app.
- Take this time to explore the project folder with your partner!
  - see this slide:
    ![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7796c127-d72c-42f2-8394-db789e87779c%2FUntitled.png?table=block&id=3a3de804-8254-45cd-86b4-7e75cfb6f7b6&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=b8cc0f5a-88d2-42e5-8739-9f94ccd628a6&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7796c127-d72c-42f2-8394-db789e87779c%2FUntitled.png?table=block&id=3a3de804-8254-45cd-86b4-7e75cfb6f7b6&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=b8cc0f5a-88d2-42e5-8739-9f94ccd628a6&cache=v2)
- **add the `react-native-gifted-chat` package to your project**
  - Discuss: how do you do this with `yarn` ?
  - Checkout `package.json` after you add the package. Do you see it there?
- **Take 5 minutes to checkout the README in the Gifted Chat repo**
  - [https://github.com/FaridSafi/react-native-gifted-chat](https://github.com/FaridSafi/react-native-gifted-chat)
  - Discuss: Look at the example, and all the props. So many props!
- **Now, using the Example code in the README as a guide, import the GiftedChat component into your `App.js`, and put the component in your render function (which is the `return` statement). Run the code - try it out! Wow!**
  - Discuss: what is going on? What is the `messages` state? What are the `messages`, `onSend`, and `user` props?
  - `useCallback` is another hook! You can read more about it if you like, but for now just treat it like a normal arrow function callback with a fancy wrapper.
  - Try removing `setMessages` from the callback and run the code again. What happens? What’s changed?
- **Explore time! Go back to the GiftedChat README. Time to play around with some of those props.**
  - Change the placeholder text from “Type a message…” to something else!
  - Change `user` prop to have your name and a photo (avatar) of your choosing from the web.
    - You might need to use the `showUserAvatar` prop for the user info to show up
  - Try using the `alwaysShowSend` prop. What changes?
  - Try using `renderUsernameOnMessage` ! Nice!
- **Time to take a deeper look at the whole `messages` thing!**
  - First, let’s see how the Example code from the README loads in some “dummy” messages. (What do we mean by “dummy”?)
    ```jsx
    useEffect(() => {
        setMessages([
    				...
        ])
      }, [])
    ```
  - There’s that `useEffect` hook we were talking about!
  - Take a few minutes to read through the explanation here: [https://reactjs.org/docs/hooks-overview.html#effect-hook](https://reactjs.org/docs/hooks-effect.html)
    - Take note: that empty array at the end means that the "effect" only gets run **once** at the beginning when our app loads. (Why do we want this?)
  - Discuss with your partner! There’s a lot of information there, so [✨💪 **ACTION ITEM ☑️**] **come up with a couple questions to share back with class, that we can answer together.**
  - Now, start playing around with that “dummy” data! Add some more messages to the array. Create a fake conversation!
    - What are the `_id`s?
      - Which one is the message `_id` and which is the user `_id` ?
    - What's going on with `createdAt` ?
    - [🥅 **GOAL** 🏁] **Can you make both grey and blue bubbles in the dummy data?**
    - Try adding images and/or videos to your dummy messages.

# Part B: Firebase 🔥

## Firebase- Cloud Firestore!

[Cloud Firestore | Firebase](https://firebase.google.com/docs/firestore)

### You will code along with this lab, with your partner!

### 1. **Install firebase so you can use it in Expo!**

```jsx
expo install firebase
```

### 2. Make a firebase account!

[https://firebase.google.com/](https://firebase.google.com/)

### 3. **Create a Project**.

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F27b874c5-f9f5-481f-aa73-9eeb30b8265d%2FUntitled.png?table=block&id=f58e1d48-28cc-4910-b175-46fb5bd37145&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=b8cc0f5a-88d2-42e5-8739-9f94ccd628a6&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F27b874c5-f9f5-481f-aa73-9eeb30b8265d%2FUntitled.png?table=block&id=f58e1d48-28cc-4910-b175-46fb5bd37145&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=b8cc0f5a-88d2-42e5-8739-9f94ccd628a6&cache=v2)
![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F75fcbe0b-482e-44ed-9178-43ee9441310d%2FUntitled.png?table=block&id=664e73dd-790d-4c5a-8cae-5a5f5a90424d&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=480&userId=b8cc0f5a-88d2-42e5-8739-9f94ccd628a6&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F75fcbe0b-482e-44ed-9178-43ee9441310d%2FUntitled.png?table=block&id=664e73dd-790d-4c5a-8cae-5a5f5a90424d&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=480&userId=b8cc0f5a-88d2-42e5-8739-9f94ccd628a6&cache=v2)

### 4**. Enable Cloud Firestore**

The RN app uses [Cloud Firestore](https://firebase.google.com/docs/firestore/) to save chat messages and receive new chat messages.

You'll need to enable Cloud Firestore with the following steps:

1. In the Firebase console's **Develop** section, click **Database**.
   ![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F70994747-0dc5-4dd8-8df8-09ed15a08137%2FUntitled.png?table=block&id=4821317b-a954-4c48-bf32-8216320279cb&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=b8cc0f5a-88d2-42e5-8739-9f94ccd628a6&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F70994747-0dc5-4dd8-8df8-09ed15a08137%2FUntitled.png?table=block&id=4821317b-a954-4c48-bf32-8216320279cb&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=b8cc0f5a-88d2-42e5-8739-9f94ccd628a6&cache=v2)
2. Click **Create database** in the Cloud Firestore pane.
3. Select the **Start in test mode** option, then click **Next** after reading the disclaimer about the security rules.

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff744744e-b63c-49b3-a122-eba83d04f830%2FUntitled.png?table=block&id=932225b8-0b60-49ea-b5f1-4e129fd2e1dd&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff744744e-b63c-49b3-a122-eba83d04f830%2FUntitled.png?table=block&id=932225b8-0b60-49ea-b5f1-4e129fd2e1dd&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=&cache=v2)

Test mode ensures that we can freely write to the database during development. We'll make our database more secure later on in this codelab.

d. Make sure you select your data to be stored close to where you are physically!

us-west2 is LA.

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F306dc7db-c488-4ade-857c-80a0457b5bcb%2FUntitled.png?table=block&id=d8569413-37e7-4328-8144-0ce64d44f442&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F306dc7db-c488-4ade-857c-80a0457b5bcb%2FUntitled.png?table=block&id=d8569413-37e7-4328-8144-0ce64d44f442&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=&cache=v2)

<aside>
☝🏾 Please be careful to enable Cloud Firestore and NOT the Realtime Database for this codelab. Both options are on the same page, but you need to enable Cloud Firestore, which is in the top section of the page.

</aside>

### 5. **Add an app.**

Yes, it's confusing... We just created a Project, but now we have to create an App under that Project!

Go to the Project Overview Page.

1. Select the web app option. Even though we're technically not making a web app, React Native will fall under this category!

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4037a265-d14e-4b14-b5fd-6c799ff2d693%2FUntitled_presentation_(1).png?table=block&id=d548a4fe-21c4-4a33-9b38-13c43e1be948&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=&cache=v2](<https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4037a265-d14e-4b14-b5fd-6c799ff2d693%2FUntitled_presentation_(1).png?table=block&id=d548a4fe-21c4-4a33-9b38-13c43e1be948&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=&cache=v2>)

b. Register the app with the nickname **Smapchat**. Click **Register app**.

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F051f57ad-00c3-4d72-9797-485d80e3586f%2FUntitled.png?table=block&id=6b1500bf-e81b-4dbb-8b20-ba58bb8421fe&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=1340&userId=&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F051f57ad-00c3-4d72-9797-485d80e3586f%2FUntitled.png?table=block&id=6b1500bf-e81b-4dbb-8b20-ba58bb8421fe&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=1340&userId=&cache=v2)

c. You'll see some code snippets! We'll copy the Firebase SDK code into our React Native app.

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8a882076-423f-4378-b292-3a6f250b4d04%2FUntitled.png?table=block&id=544c22a0-3d8f-4ccd-85fc-fd6e159edf95&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8a882076-423f-4378-b292-3a6f250b4d04%2FUntitled.png?table=block&id=544c22a0-3d8f-4ccd-85fc-fd6e159edf95&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=&cache=v2)

### 6. Set up Firebase on your React Native app.

Go back to your React Native project in VSCode. Create a new `firebase.js` file:

```jsx
import firebase from "firebase/app";
import "firebase/firebase-firestore";

// Your web app's Firebase configuration, which you copy-pasted from Step 6
var firebaseConfig = {};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore();
export default firestore;
```

### 7. Create a collection in your Cloud Firestore.

On the lefthand bar of the Firebase Console, click on Cloud Firestore.

Start a collection, and call it `Chats`:

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0e45c958-39ec-42e1-9a28-d866264f100b%2FUntitled.png?table=block&id=0e06693d-89fd-471f-baf3-2203476b1357&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0e45c958-39ec-42e1-9a28-d866264f100b%2FUntitled.png?table=block&id=0e06693d-89fd-471f-baf3-2203476b1357&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=&cache=v2)

Then we'll add the first document:

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd6c6b7ce-151c-4634-978a-5f7833bcf361%2FUntitled.png?table=block&id=34abe38c-8c05-4a3f-9713-1ad7c78bb33d&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=1100&userId=&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd6c6b7ce-151c-4634-978a-5f7833bcf361%2FUntitled.png?table=block&id=34abe38c-8c05-4a3f-9713-1ad7c78bb33d&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=1100&userId=&cache=v2)

# End of week 5 day 2

---

# Week 5 day 3

## Part A: Firebase Continued

Keep this link handy for reference when doing Firestore stuff (make sure to choose "Node.js" in the code examples sections):

[Cloud Firestore | Firebase](https://firebase.google.com/docs/firestore)

# 1. Retrieve data from Firestore

First, make sure you've completed the lab from yesterday. You should have a `firebase.js` file in your chapsnat folder, with your `firebaseConfig` details. You should also have a Chats collection in your online Firebase/Firestore console, and that collection should have at least one "chat document" that looks something like this:

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd6c6b7ce-151c-4634-978a-5f7833bcf361%2FUntitled.png?table=block&id=339c803b-ddeb-42fb-a616-907a219169aa&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=b8cc0f5a-88d2-42e5-8739-9f94ccd628a6&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd6c6b7ce-151c-4634-978a-5f7833bcf361%2FUntitled.png?table=block&id=339c803b-ddeb-42fb-a616-907a219169aa&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=b8cc0f5a-88d2-42e5-8739-9f94ccd628a6&cache=v2)

Make sure you and your partner are both at this stage!

### Confirm your import line at the top of your firebase.js file looks like this:

```jsx
import firebase from "firebase/app";
```

### Alright now let's get started!

[Get data with Cloud Firestore | Firebase](https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document)

- First, import your Firestore from yesterday into the `App.js` file:
  - `import db from "./firebase";`
- Now, let's clear our `useEffect` function of all the dummy data we added, and add in some new code to retrieve data from our database:
  ```jsx
  useEffect(() => {
    db.collection("Chats")
      .doc("myfirstchat")
      .get()
      .then((snapshot) => {
        console.log(snapshot.id);
        console.log(snapshot.data());
      });
  }, []);
  ```
  - Discuss with your partner what's going here! `.collection` , `.doc` , `.get` , and `.then` . Look at that callback there! And also make sure to run the code and look in your console to see what you get!
- Next, let's tweak this `useEffect` code to actually take that data we downloaded and use it in our app with `setMessages`. Discuss with your partner **where** the `setMessages` call should go, and **what** should be in it.
- **[✅ CHECKPOINT]** You should have your dummy message from Firestore appear in your app! wow!
  - Add another message into your chat doc in firestore, and make sure it appears in your app!
  - Try to get at least one message downloaded from firestore to be a blue bubble! Remember that the `_id` needs to match. Watchout! The number 1 and the string "1" are not an exact match, for example.
  - NB: you might see "Invalid Date". Don't worry about that for now, we'll fix it later.

## Check in with an Instructor or coach once you're done with part 1!

# 2. Send data to Firestore

[Add data to Cloud Firestore | Firebase](https://firebase.google.com/docs/firestore/manage-data/add-data)

First! Beware that we're about to potentially **lose all our dummy messages in a terrible accident!** Create a new chat document and use that for this section if you don't want to lose them.

- Let's add some code to the beginning of `onSend` callback to upload our new messages to Firestore:
  ```jsx
  db.collection("Chats").doc("myfirstchat").set({ messages: messages });
  ```
  - Discuss again! What is `.set` doing? Why don't we need `.then` ?
- Send a message and now go to your Firestore database dashboard
  - **[✅ CHECKPOINT]** Wow! You should see the message appear in your dashboard.
  - **BUT** your old messages disappeared!
- And now send a few new messages, and refresh your React Native app page, as well as your Firestore database dashboard page.

  - **UH OH!!!** What's the bug you're seeing?
    - Answer:
      Only the latest message gets saved! We lose all the others.
  - [✨💪 **ACTION ITEM ☑️**] **Discuss, then call an instructor or coach over and discuss why you think you're seeing this bug**
  - Add a `console.log(messages)` at the beginning of `onSend` callback and start to debug what's going on.
  - **[🥅 GOAL 🏁] Now let's try to fix it!**

  #### You absolutely need to try to do this on your own before looking at the answer! It is there to compare your work to, not to copy. Take a peek at the hints right away if need be.

    <details>
    <summary>Hints:</summary>
    
    - might need to use `.update` instead of `.set`
    - 👀 [https://firebase.google.com/docs/firestore/manage-data/add-data#update_elements_in_an_array](https://firebase.google.com/docs/firestore/manage-data/add-data#update_elements_in_an_array)
            - You'll need to `import firebase from "firebase/app"` at the top of `App.js` in order to  `firebase.firestore.FieldValue.arrayUnion(...)`
    </details>

    <details>

    <summary>Answer:</summary>

  ## Your final `onSend` code should look something like this:

  ```jsx
  const onSend = useCallback((messages = []) => {
    db.collection("Chats")
      .doc("myfirstchat")
      .update({
        // arrayUnion appends the message to the existing array
        messages: firebase.firestore.FieldValue.arrayUnion(messages[0]),
      });
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);
  ```

    </details>

# 3. Live Updates

[Get realtime updates with Cloud Firestore | Firebase](https://firebase.google.com/docs/firestore/query-data/listen)

This one is actually surprisingly easy! Let's revisit our `useEffect` function.

- All we do is take this code:

```jsx
db.collection("Chats")
  .doc("myfirstchat")
  .get()
  .then((snapshot) => {
		...
	}
```

- And replace it with this code:

```jsx
db.collection("Chats")
  .doc("myfirstchat")
  .onSnapshot((snapshot) => {
    console.log("New Snapshot!");
		...
	}
```

- **[✅ CHECKPOINT]** Great! Now when you send messages, you should see "New Snapshot!" in your console.
- **[✅ CHECKPOINT]** Now if you add a message in your Firestore database dashboard, it should appear immediately in your app **without having to refresh the app.**

- There's one last thing to do. At some point we want to **stop listening** to updates. This is called "**unsubscribing**".
  - Q: when do we want to stop listening? A: when we exit the chat view!
  - Q: How do we know when we're exiting the chat view? A: Whenever a component gets "unmounted" (fancy React word for taken off screen), it runs a "**cleanup**" function.
  - Q: ummm what? A: you can read more about unsubscribing and clean up functions here:
    [Using the Effect Hook - React](https://reactjs.org/docs/hooks-effect.html#example-using-hooks-1)
    [Get realtime updates with Cloud Firestore | Firebase](https://firebase.google.com/docs/firestore/query-data/listen#detach_a_listener)
  - Finally, your `useEffect` code should look something like this:
    ```jsx
    useEffect(() => {
      let unsubscribeFromNewSnapshots = db
        .collection("Chats")
        .doc("myfirstchat")
        .onSnapshot((snapshot) => {
          console.log("New Snapshot!");
          setMessages(snapshot.data().messages);
        });

      return function cleanupBeforeUnmounting() {
        unsubscribeFromNewSnapshots();
      };
    }, []);
    ```

## UPDATE HERE!! FINAL CODE FOR PART A LAB:

[Snap-Engineering-Academy-2021/chapsnat](https://github.com/Snap-Engineering-Academy-2021/chapsnat/blob/main/App.js)

---

## Part B: Intro to React Navigation

**To help us learn about the different types of Navigation in React, we'll be exploring 3 mini-projects in the browser, using Expo Snacks. Expo Snack works kind of like Replit but specifically for React Native code; it allows you to quickly view, run, and change React Native code in the browser.**

# 1. Explore Drawer Navigators

**Click on the link below and click around the app in the right hand side. Open up the drawer navigation!**

[DrawerNavDemo](https://snack.expo.io/@rjc45/drawernavdemo)

- **[✨💬 DISCUSS]** The side bar should link to both "Home" and "Notifications"! Can you find the line in the code where the Drawer Navigator is being defined?
- **[✨💬 DISCUSS]** Can you find the lines in the code where HomeScreen is being defined? It should be a functional component (aka a function that returns a component).
- **[✨💬 DISCUSS]** Can you find the line in the code where NotificationsScreen is being defined? It should be a functional component (aka a function that returns a component).

**Now we're going to look at the EXACT same code ...except this time you'll see that some of it was moved into a SCREENS folder.**

[Drawer Demo](https://snack.expo.io/@jennyhansolo/drawer-demo)

- **[✨💬 DISCUSS]** Why would we do this??? Why would we bother moving some of the code from App.js into a separate folder?
  - Answer
    Decomposition! This way our App.js is a lot less cluttered. It only handles the high-level navigation now.
- **[✨💬 DISCUSS]** Now let's do the same scavenger hunt as above: Can you find the line in the code where the Drawer Navigator is being defined?
  - Answer
    It's in the `App.js` file! This is going to be the parent component of our entire app. It's the first file that gets rendered, and it will be in charge of importing the other files/screens that will get rendered.
- **[✨💬 DISCUSS]** Can you find the file where HomeScreen is being defined? It should be a functional component (aka a function that returns a component).
  - Answer
    It's in the `screens/HomeScreen.js`! Notice however that in order for `App.js` to use this screen, it needs to be imported at the very top of `App.js` as well.
- **[✨💬 DISCUSS]** Can you find the file where NotificationsScreen is being defined? It should be a functional component (aka a function that returns a component).
  - Answer
    It's in the `screens/NotificationsScreen.js`! Notice however that in order for `App.js` to use this screen, it needs to be imported at the very top of `App.js` as well.
- [✨💪 **ACTION ITEM ☑️** ] Currently, there's no way for you to open the navigation drawer from the Notifications Screen. That's a bummer! Add a button to `screens/NotificationsScreen.js` so that you can open the side bar from the Notifications Screen, the same way you can from the Home Screen.

  - Code to check your work
      <details>
    <summary>Make sure you talk to your teammates and instructors first before peeking here!</summary>

    ## Are you sure you already asked for help? Ok fine... go ahead and check out the code.

    ```jsx
    //screens/NotificationsScreen.js
    import * as React from "react";
    import { Text, View, StyleSheet, Image, Button } from "react-native";

    export default function NotificationsScreen({ navigation }) {
      return (
        <View style={styles.screenContainer}>
          <Text style={styles.screenText}> Notifications! </Text>
          <Button title="Open side bar" onPress={() => navigation.openDrawer()} />
        </View>
      );
    }

    const styles = StyleSheet.create({
      screenContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      screenText: {
        fontSize: 32,
      },
    });
    ```

    </details>


# 2. Explore Tab Navigators

Tab Navigators are where it's at! We definitely want one of these in our `Chapsnat` repo. Let's click on this Snack and see what we find:

[Tab Navigator Lab](https://snack.expo.io/@jennyhansolo/tab-navigator-lab)

- [✨💪 **ACTION ITEM ☑️** ] There's an error!!! What's up with that? 👀 Debug the `App.js` file so that `HomeScreen`, `DetailsScreen`, and `SettingsScreen` are properly imported!

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F319a54e0-b5f5-405b-9aee-7573db1f60b0%2FUntitled.png?table=block&id=edf88131-0734-4ef0-a4d0-80b7b7a22763&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=610&userId=b8cc0f5a-88d2-42e5-8739-9f94ccd628a6&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F319a54e0-b5f5-405b-9aee-7573db1f60b0%2FUntitled.png?table=block&id=edf88131-0734-4ef0-a4d0-80b7b7a22763&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=610&userId=b8cc0f5a-88d2-42e5-8739-9f94ccd628a6&cache=v2)

- Code to check your work
    <details>
  <summary>Make sure you talk to your teammates and instructors first before peeking here!</summary>

  ## Are you sure you already asked for help? Ok fine... go ahead and check out the code.

  ```jsx
  import HomeScreen from "./screens/HomeScreen";
  import SettingsScreen from "./screens/SettingsScreen";
  import DetailsScreen from "./screens/DetailsScreen";
  ```

  </details>


- [✨💪 **ACTION ITEM ☑️** ] You may notice that `SettingsScreen.js` function looks slightly different from `HomeScreen.js` function ... can you spot the difference?
  - They're actually two different ways of exporting a functional component! Change `SettingsScreen` to match the way that `HomeScreen` and `DetailsScreen` are being defined... just for consistency's sake!
- Code to check your work
  <details>
  <summary>Make sure you talk to your teammates and instructors first before peeking here!</summary>

  ```jsx
  import * as React from 'react';
  import { Text, View, StyleSheet, Image } from 'react-native';

  function SettingsScreen() {
  return (
  <View style={styles.screenContainer}>
  	<Text style={styles.screenText}>Settings!</Text>
  </View>
  );
  }

  const styles = StyleSheet.create({
  	screenContainer: {x
  		flex: 1,
  		justifyContent: 'center',
  		alignItems: 'center',
  	},
  	screenText: {
  		fontSize: 32,
  	},
  });

  export default SettingsScreen;
  ```

  </details>

# End of Week 5 day 3

---

# Week 5 day 4

# Part A: Stack Navigator Lab

[Stack Navigator Lab](https://github.com/Snap-Engineering-Academy-2022/Stack-Navigator-Lab)

**🌴Optional Resources**

- React native crash course: [https://www.reactnative.express/](https://www.reactnative.express/)
- React Navigation documentation for route.params [https://reactnavigation.org/docs/params](https://reactnavigation.org/docs/params)

---

# Part B: Login and Signup Lab

[Login & Sign up Lab](https://github.com/Snap-Engineering-Academy-2022/Login-and-Signup-Lab)

**🌴Optional Resources**

- Firebase documentation for currUser, signInWithEmailAndPassword, createUserWithEmailAndPassword: [https://firebase.google.com/docs/auth/web/manage-users](https://firebase.google.com/docs/auth/web/manage-users) and [https://firebase.google.com/docs/auth/web/password-auth](https://firebase.google.com/docs/auth/web/password-auth)

# End of Week 5 day 4

---

### Further Studies / resources:

Nice guide to React as a framework

[Framer Guide to React](https://www.framer.com/books/framer-guide-to-react/)# chapSnat
