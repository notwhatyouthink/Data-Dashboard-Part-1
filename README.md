# Web Development Project 5 - *Data Dashboard Part 1*

Submitted by: **Sharnica Jeudy Z23582376**

This web app: **A comprehensive brewery data dashboard built with React that displays information about 100+ breweries across the United States using the Open Brewery DB API. The dashboard features four real-time summary statistics calculated from the filtered dataset including total breweries, number of micro breweries, states covered, and brewpubs count—all dynamically updating based on active filters. Users can search for breweries by name, city, or state through a search bar that filters results in real-time as they type, and additionally filter by brewery type (micro, brewpub, regional, large, planning, contract, proprietor) using a dropdown menu. Both filters work simultaneously to narrow results, with the brewery count and statistics automatically recalculating based on the filtered data. The main dashboard displays brewery cards in a responsive grid layout, with each card showing the brewery's name, type, location, street address, phone number, and a clickable website link that opens in a new tab. The application demonstrates sophisticated data manipulation by using the Set data structure to calculate unique state counts, combining multiple filter criteria, and maintaining separate state for original and filtered data to enable efficient search and filter operations.**

Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard should display at least 10 unique items, one per row
  - The dashboard includes at least two features in each row
- [x] **`useEffect` React hook and `async`/`await` are used**
- [x] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes at least three summary statistics about the data, such as:
    - *insert details here*
- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar 
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types
  - e.g., as a text input, a dropdown or radio selection, and/or a slider
- [x] The user can enter specific bounds for filter values

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ... ScreenToGif 
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

What I learned is fetching API data with useEffect and async/await, managing multiple interactive state variables (data, filters, search), implementing simultaneous search and filter functionality, calculating dynamic statistics from filtered data using .filter() and Set for unique counts, using .map() to render data arrays, creating controlled inputs, combining multiple filter conditions efficiently, and building responsive grid layouts with CSS Grid.

## License

    Copyright [2026] [Sharnica Jeudy]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
