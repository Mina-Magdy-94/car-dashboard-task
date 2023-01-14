# Project Name
Car Dashboard task for Vekelez

##Main sections:
<br>
[1-what are the main Properties of the task?](#what-are-the-main-properties-of-the-task)
<br>
[2-Features that will be added in the future (updated)](#features-that-will-be-added-in-the-future)
<br>
[3-Important Notes](#important-notes)




# what are the main Properties of the task?
#### 1- Data come from JSON server at port 8080 using RTK and Axios...just write the following command on the terminal of backend folder
```bash
json-server --watch db.json --port 8080
```


#### 2 Charts were created using amCharts (as recommended) and the react-circular-progressbar
#### 3- The pages are fully responsive on different screens including a fully responsive sidebar that can be toggled into and off the screen
<br>
<div>
<img src="https://user-images.githubusercontent.com/112242972/212325890-ef8feff3-8624-4971-bc8e-8fdd63ace250.png" width='600' height='280'>
</div>
<br>
<div>
<img src="https://user-images.githubusercontent.com/112242972/212325984-573bd6d3-d18a-4eab-9a66-3942e89eb858.png" width='600' height='280'>
</div>
<br>
<div>
<img src="https://user-images.githubusercontent.com/112242972/212326066-e77c7fd4-6201-4c40-9e92-21d10a6896ef.png" width='600' height='280'>
</div>
<br>
<div>
<img src="https://user-images.githubusercontent.com/112242972/212326289-9bd31990-43b5-46a9-9af4-c27bdd904a3c.png" width='600' height='280'>
</div>

<br>


#### 4-Two buttons that show different layouts on the "Booking" section
<br>
<div>
<img src="https://user-images.githubusercontent.com/112242972/212328390-675fb1e9-ee12-41bc-87dd-7cec24df6d2b.png" width='300' height='140'>
</div>
<br>
<div>
<img src="https://user-images.githubusercontent.com/112242972/212328464-6ef338d2-2638-4167-b524-64e551b8a0da.png" width='600' height='280'>
</div>
<br>
<div>
<img src="https://user-images.githubusercontent.com/112242972/212328504-b137cabd-585c-43f7-bd45-efec044d24db.png" width='600' height='280'>
</div>
<br>

#### 5-Different styles examples:
<br>
-"heart" button in any card of the "Booking" page changes into red on hovering and on click
<br>

<div>
<img src="https://user-images.githubusercontent.com/112242972/212330313-8db88a1c-b8d5-4bc6-a647-e77580677395.png" width='600' height='280'>
</div>
<br>

<br>
-on hovering ,the background color of cards of progress bar in the "Dashboard" tab changes 
<br>

<div>
<img src="https://user-images.githubusercontent.com/112242972/212330327-8fcadf34-d23a-4dea-a352-2ffce0897d7e.png" width='600' height='280'>
</div>
<br>
<br>

#### 6-There are 3 pages on this task
<br>
-The "Booking" tab
<br>
<div>
<img src="https://user-images.githubusercontent.com/112242972/212339716-7407735b-1328-4737-86ed-e0d27dbe47e2.png" width='600' height='280'>
</div>
<br>

<br>
-The "Dashboard" tab
<br>
<div>
<img src="https://user-images.githubusercontent.com/112242972/212339752-b0222037-4917-4fa1-beaf-a263c68dcfcb.png" width='600' height='280'>
</div>
<br>

<br>
-The "ErrorPage" which appears on 
<br>
<div>
<img src="https://user-images.githubusercontent.com/112242972/212339784-87751301-b557-4820-aeac-cdf22a6257d3.png" width='600' height='280'>
</div>
<br>

#### 7-Spinner during fetching the data from the backend

<div>
<img src="https://user-images.githubusercontent.com/112242972/212470573-6ce6cbe4-f47a-40c1-877e-90e382aaf9d3.png" width='600' height='280'>
</div>
<br>

#### 8-Error page to show if we failed to get fetch the data from backend (backend server is not open)(open it using this command
#### "json-server --watch db.json --port 8080" on the backend folder terminal)

<div>
<img src="https://user-images.githubusercontent.com/112242972/212470576-c762221b-524b-4582-a824-d37951db1bc8.png" width='600' height='280'>
</div>
<br>


# Features that will be added in the future
#### 1-Adding a fake api using Json server (Done)
#### 2-Using a state management tool (like Redux Toolkit) and axios to fetch data from backend(Done)
#### 3-Adding Dark & Light modes buttons that on click "set state" of a style object and save the new state of the style object in local storage,then using this object to set the style of the webPages
#### 4-Using "useEffect" hook to watch over different states that on their changes the pages should be rendered(component will update)(Done)
#### 5-Using the value of the "select" input to filter the array of cars and render the filtered array which is being watched by "useEffect" hook
<br>

# Important Notes
### 1-Localized states were used because there were almost no states that need to be passed from one component to another
### 2-Globalized states (using contexts or RTK) should only be used on where states are passed between components and where the actual data comes from backend 



