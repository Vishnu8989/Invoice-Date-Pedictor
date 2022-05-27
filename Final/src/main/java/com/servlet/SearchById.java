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
 * Servlet implementation class SearchById
 */
@WebServlet("/SearchById")
public class SearchById extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public SearchById() {
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

		System.out.println("-------Searching By Id Process Started-------");

		int id = Integer.parseInt(request.getParameter("id"));
		System.out.println("id : " + id);

		System.out.println("\n\n\n->Searching Data...");
		HashMap<Object, Object> Response = new HashMap<Object, Object>();
		long sl_no, cust_number, posting_id, invoice_id, isOpen, is_deleted;
		double total_open_amount;
		String business_code, doc_id, clear_date, buisness_year, posting_date, document_create_date,
				document_create_date1;
		String due_in_date, invoice_currency, document_type, area_business, baseline_create_date, cust_payment_terms,
				aging_bucket;
		Response.put("Found", false);
		try {
			Crud Conn = new Crud();
			Connection conn = Conn.getConnection();
			String Query = "Select * from winter_internship where sl_no = "+id+" and is_deleted = 0";
			PreparedStatement pst1 = conn.prepareStatement(Query);
			ResultSet rs = pst1.executeQuery();
			while (rs.next()) {
				sl_no = rs.getLong("sl_no");
				cust_number = rs.getLong("cust_number");
				posting_id = rs.getLong("posting_id");
				invoice_id = rs.getLong("invoice_id");
				isOpen = rs.getLong("isOpen");
				is_deleted = rs.getLong("is_deleted");
				total_open_amount = rs.getDouble("total_open_amount");
				business_code = rs.getString("business_code");
				buisness_year = rs.getString("buisness_year");
				doc_id = rs.getString("doc_id");
				clear_date = rs.getString("clear_date");
				posting_date = rs.getString("posting_date");
				document_create_date = rs.getString("document_create_date");
				document_create_date1 = rs.getString("document_create_date1");
				due_in_date = rs.getString("due_in_date");
				invoice_currency = rs.getString("invoice_currency");
				document_type = rs.getString("document_type");
				area_business = rs.getString("area_business");
				baseline_create_date = rs.getString("baseline_create_date");
				cust_payment_terms = rs.getString("cust_payment_terms");
				aging_bucket = rs.getString("aging_bucket");
				Info A = new Info(sl_no, cust_number, posting_id, invoice_id, isOpen, is_deleted, total_open_amount,
						business_code, doc_id, clear_date, buisness_year, posting_date, document_create_date,
						document_create_date1, due_in_date, invoice_currency, document_type, area_business,
						baseline_create_date, cust_payment_terms, aging_bucket);
				Response.put("SearchedCustomer", A);
				Response.put("Found",true);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		response.getWriter().append(new Gson().toJson(Response));
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
