---
title: "BU Dining Meal Generator"
description: "Builds a full day of meals from BU dining hall menus to hit calorie and macro targets."
date: 2026-09-28
period: "2026"
category: "Software"
role: "Solo developer"
accent: "#10b981"
featured: true
tech: ["React", "Express", "Node.js"]
repo: "https://github.com/bbrihuang/bu-dining-gem"
---

## The Problem

Eating at a college dining hall can be quite difficult for someone trying to hit specific calorie and macro targets. The menu changes every day, and figuring out what to put on your plate to reach a protein or calorie goal means doing math in line. You can get whatever you want, but you can't really track whatever you want.

## What I Built

A web app that reads the day's dining hall menu and generates a full day of meals sized to your calorie and macro targets. Currently, it's only for my college, BU. But I will be adding more colleges and universities down the line. It has a React front end and an Express server.

## Obstacles I Faced

The first version of the "generate meal" button picked foods and portions that didn't actually add up to the daily targets (generated portions like "0.5 Bananas"; like, who is eating a banana and throwing away the other half??) The AI feature also didn't work, it ignored a lot of hard requests that the user gave. Sometimes, this would be dangerous! It would ignore requests to avoid allergies.. Thankfully this is fixed as of recent.

<!-- TODO (Brian): explain how you fixed it — what was wrong, and what you changed. -->
