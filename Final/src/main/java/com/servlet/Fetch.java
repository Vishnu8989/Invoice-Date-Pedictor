package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import com.crud.Crud;

@WebServlet("/Fetch")
public class Fetch extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public Fetch() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// response.getWriter().append("Served at: ").append(request.getContextPath());
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// response.getWriter().append("Served at: ").append(request.getContextPath());
		Crud fetchdata = new Crud();
		int lim = 3000;
		HashMap<Object, Object> data = fetchdata.getData(lim);
		// System.out.println(data);
		System.out.println("Reload Completed");
		Gson gson = new Gson();
		String respData = gson.toJson(data);
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.print(respData);
	}

}
