<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use Cookie;
use Illuminate\Http\Request;

class SetLoggedInCookieMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        Cookie::queue(
            Cookie::forever(
                config('session.logged_in_cookie_key'),
                Auth::check() ? 'true' : 'false',
                httpOnly: false
            )
        );

        return $next($request);
    }
}
