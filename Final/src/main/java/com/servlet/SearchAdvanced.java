package com.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
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
 * Servlet implementation class SearchAdvanced
 */
@WebServlet("/SearchAdvanced")
public class SearchAdvanced extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public SearchAdvanced() {
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
		System.out.println("Advanced Search Request Started");
		int cust_number = Integer.parseInt(request.getParameter("cust_number"));
		System.out.println("Cusomer Number : " + cust_number);
		int invoice_id = Integer.parseInt(request.getParameter("invoice_id"));
		System.out.println("Invoice Id : " + invoice_id);
		String doc_id = request.getParameter("doc_id");
		System.out.println("Document id : " + doc_id);
		String buisness_year = request.getParameter("business_year");
		System.out.println("Business Year : " + buisness_year);
		System.out.println("\n\n\n->Searching Data...");
		HashMap<Object, Object> Response = new HashMap<Object, Object>();
		ArrayList<Info> Customers = new ArrayList<Info>();
		long sl_no, posting_id, isOpen, is_deleted;
		double total_open_amount;
		String business_code, clear_date, posting_date, document_create_date,
				document_create_date1;
		String due_in_date, invoice_currency, document_type, area_business, baseline_create_date, cust_payment_terms,
				aging_bucket;
		Response.put("Found", false);
		try {
			Crud Conn = new Crud();
			Connection conn = Conn.getConnection();
			String Query = "Select * from winter_internship where sl_no > 0 ";
			if (cust_number != -99) {
				Query += "and cust_number = " + cust_number;
			}
			if (invoice_id != -99) {
				Query += " and invoice_id = " + invoice_id;
			}
			if (!doc_id.equals("-99")) {
				Query += " and doc_id = '" + doc_id + "'";
			}
			if (!buisness_year.equals("-99")) {
				Query += " and buisness_year = '" + buisness_year + "'";
			}
			PreparedStatement pst1 = conn.prepareStatement(Query);
			ResultSet rs = pst1.executeQuery();
			System.out.println(pst1);
			while (rs.next()) {
				sl_no = rs.getLong("sl_no");
				cust_number = rs.getInt("cust_number");
				posting_id = rs.getLong("posting_id");
				invoice_id = rs.getInt("invoice_id");
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
				Customers.add(A);
				Response.put("Found", true);
			}
			Response.put("Response", Customers);
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
