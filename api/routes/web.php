<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::get('/', function () {
    return response()->json([
        'Laravel Web Server' => 'Running Successfully',
    ]);
});