<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/la-espera', function () {
    return Inertia::render('LaEspera');
})->name('LaEspera');

Route::get('/con-trabajo', function () {
    return Inertia::render('conTrabajo');
})->name('conTrabajo');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
