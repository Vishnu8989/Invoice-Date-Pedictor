package com.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.crud.Crud;
import com.google.gson.Gson;
import com.pojo.Info;

/**
 * Servlet implementation class AnalyticsA
 */
@WebServlet("/AnalyticsA")
public class AnalyticsA extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public AnalyticsA() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.addHeader("Access-Control-Allow-Origin", "*");
		System.out.println("Analytics Started");
		HashMap<Object, Object> Response = new HashMap<Object, Object>();
		HashMap<String, Float> Companies  =new HashMap<String, Float>();
		try {
			Crud Conn = new Crud();
			Connection conn = Conn.getConnection();
			String Query = "select business.business_name,cust_number,sum(distinct total_open_amount) as TotalAmount from winter_internship "
					+ "join business on business.business_code=winter_internship.business_code "
					+ "group by business.business_name";
			PreparedStatement pst1 = conn.prepareStatement(Query);
			System.out.println(pst1);
			ResultSet rs = pst1.executeQuery();
			while (rs.next()) {
				System.out.println(rs.getString("business_name"));
				System.out.println(rs.getInt("cust_number"));
				Companies.put(rs.getString("business_name"), rs.getFloat("TotalAmount"));
			}
			Response.put("Companies", Companies);
		} catch (Exception e) {
			e.printStackTrace();
		}
		response.getWriter().append(new Gson().toJson(Response));
		System.out.println("Analytics Ended");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
