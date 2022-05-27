package com.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.crud.Crud;
import com.google.gson.Gson;

/**
 * Servlet implementation class DeleteCustomer
 */
@WebServlet("/DeleteCustomer")
public class DeleteCustomer extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteCustomer() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		response.addHeader("Access-Control-Allow-Origin", "*");
		System.out.println("Delete Request Started");
		int id = Integer.parseInt(request.getParameter("id"));
		System.out.println("id : " + id);
		HashMap<Object, Object> Response = new HashMap<Object, Object>();
		try {
			Crud Conn = new Crud();
			Connection conn = Conn.getConnection();
			String sql_query = "update winter_internship set is_deleted=1 where sl_no ="+id;
			// System.out.println(sql_query2);
			PreparedStatement pst1 = conn.prepareStatement(sql_query);
			System.out.println(pst1);
			System.out.println("Delete Request Ended");
			if (pst1.executeUpdate() > 0) {
				Response.put("delete", "Success");
			} else {
				Response.put("delete", "Failed");
			}
			System.out.println("Data Deleted");
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Data Not deleted");
		}
		response.getWriter().append(new Gson().toJson(Response));
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
