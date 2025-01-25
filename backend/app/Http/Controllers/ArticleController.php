<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $articles = Article::query();

        if ($request->has('keyword')) {
            $articles->where('title', 'like', '%' . $request->keyword . '%');
        }
        if ($request->has('category')) {
            $articles->where('category', $request->category);
        }
        if ($request->has('source')) {
            $articles->where('source', $request->source);
        }
        if ($request->has('date')) {
            $articles->whereDate('published_at', $request->date);
        }

        return response()->json($articles->get());
    }

    public function show($id)
    {
        $article = Article::findOrFail($id);
        return response()->json($article);
    }

}
