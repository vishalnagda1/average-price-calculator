# Average Share Price Calculator

The motivation to implement this application is to get an idea of the new reflected average/selling price of the share before making an actual investment. And it also helps to avoid errors occurs while doing manual calculations.



###### Let's understand with the below given example;

*Let's assume, currently you have 100 shares of Reliance at the rate of ₹ 1000 (purchase price of a share) in your demat account. So, below given are your current investment details:*

**Total Invested Capital:** *₹ 100,000*

**Total Number of Shares (Quantity):** *100*

**Price per Share (Purchase Price):** *₹ 1000*

**Average/Selling price per share:** *₹ 1000*

Now assume, the current price of Reliance's stock is *₹ 800*. And now again you are planning to buy 50 more shares of Reliance at the rate of *₹ 800*. So, here are the new investment details:

**Total Capital required:** *₹ 40,000*

**Total Number of Shares (Quantity):** *50*

**Price per Share (Purchase Price):** *₹ 800*

**Average/Selling price per share for new investment:** *₹ 800*



#### Now here is the million dollar question:

***What is the final average/selling price of all 150 shares?***

###### Here are the steps you can follow:

1. [Click Here to open the app](https://apc.gitick.com/)
2. In **Price per share** input field, enter the purchase price of the existing shares. (as per above example we have *₹ 1000*  is price per share).
3. In **Total shares** input field, enter quantity of existing shares. (as per above example we have total *100*  quantity of shares).
4. Click on **Add Row** button to add a new row for inputs.
5. Now, in newly added row's **Price per share** field, enter the **current price** of the share. (as per above example, *₹ 800* is the current price of Reliance's stock).
6. Next in newly added row's **Total shares** field, enter the number of new shares you want to buy. (as per above example, 50 new shares we're going to buy).
7. Now check the value of **Total Investment**, **Total Shares** and **Average Price**. Below given are the resultant values as per the above example:
   **Total Investment : 140000**
   **Total Shares : 150**
   **Average Price : 933.33**
8. Done. Happy investing...



### Project Installation Guide

##### Requirements

**Node JS -** *12.15* or later versions.

**NPM -** *3.5* or later versions.

**Editor -** Your favorite editor.

**Browser -** Chrome >= *81.0* or Firefox >= *72.0.2*

###### Steps

1. Clone or download project in your system.
2. Navigate to project directory in the terminal or command prompt.
3. run `npm i`
4. run `npm start`
5. Your project server is running at [http://localhost:8000/](http://localhost:8000/)



### Contribution

1. Fork it [https://github.com/vishalnagda1/average-price-calculator/fork](https://github.com/vishalnagda1/average-price-calculator/fork)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new pull request.
