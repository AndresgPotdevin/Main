# Dependecies
from bs4 import BeautifulSoup as bs
from selenium import webdriver
from splinter import Browser
import os
import requests
import pandas as pd
import time
import pymongo

# Scrape Function
def scrape():

    mars_dict = {}


    # NASA Mars News
    news_url = "https://mars.nasa.gov/news/"
    driver = webdriver.Chrome()
    driver.get(news_url)
    nasa_html_soup = bs(driver.page_source, 'html.parser')

    news_headlines = nasa_html_soup.find('div', class_='list_text')
    print(news_headlines)

    news_title = news_headlines.find('div', class_='content_title').text
    news_p = news_headlines.find('div', class_='article_teaser_body').text
    print(news_title)
    print(news_p)

    mars_dict['news_title'] = news_title
    mars_dict['news_p'] = news_p

    # JPL Mars Space Images - Featured Image
    image_url = "https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars"
    driver = webdriver.Chrome()
    driver.get(image_url)
    img_html_soup = bs(driver.page_source, 'html.parser')

    article = img_html_soup.find('article', class_='carousel_item')
    print(article)

    a = article.find('a')
    print(a)

    featured_image_url_extension = a["data-fancybox-href"]
    print(featured_image_url_extension)

    featured_image_url = ("https://www.jpl.nasa.gov"+featured_image_url_extension)
    print(featured_image_url)

    mars_dict['featured_image'] = featured_image_url

    # Mars Weather
    tweeter_url = "https://twitter.com/marswxreport?lang=en"
    driver = webdriver.Chrome()
    driver.get(tweeter_url)
    tweeter_html_soup = bs(driver.page_source, 'html.parser')

    latest_tweet = tweeter_html_soup.find('div', class_='js-tweet-text-container')
    print(latest_tweet)

    mars_weather = latest_tweet.find('p').text
    print(mars_weather)

    mars_dict['mars_weather'] = mars_weather

    # Mars Facts
    mars_facts_url = "https://space-facts.com/mars/"
    mars_facts = pd.read_html(mars_facts_url)
    mars_facts_df = mars_facts[-1].rename(columns={0:"Description", 1:"Value"})
    mars_facts_df

    mars_facts_html = mars_facts_df.to_html()
    mars_facts_html

    mars_dict['mars_facts_html'] = mars_facts_html

    # Mars Hemispheres
    hemispheres_url = "https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars"
    driver = webdriver.Chrome()
    driver.get(hemispheres_url)
    hemispheres_html_soup = bs(driver.page_source, 'html.parser')

    links = hemispheres_html_soup.find_all('div',class_="item")

    mars_hemispheres = []

    for link in links:

        title = link.find('h3').text
        title = title.replace("Enhanced","")
        endlink = link.find("a")
        imagelink = "https://astrogeology.usgs.gov"+ str(endlink.attrs['href'])

        driver.get(imagelink)
        image_soup = bs(driver.page_source,"html.parser")
        downloads = image_soup.find("div",class_="downloads")

        image_url = downloads.find("a").attrs["href"]
        mars_hemispheres.append({"title":title, "img_url":image_url})

    print(mars_hemispheres)
    mars_dict['mars_hemispheres'] = mars_hemispheres

    return mars_dict
